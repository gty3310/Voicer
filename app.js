const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const _twitter = require('twitter');

app.use(express.static('public'));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

let localKeys = null;
if (process.env.production_mode === "on"){
  localKeys = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    bearer_token: process.env.bearer_token
  };
}
else {
  const keys = require('./keys');
  localKeys ={
    consumer_key: keys.consumer_key,
    consumer_secret: keys.consumer_secret,
    bearer_token: keys.bearer_token
  };
}

const twitter = new _twitter(localKeys);


// create a search route
app.get('/search', (request, appResponse) => {
  // let p = new Promise((resolve, reject) => {
  // debugger
  twitter.get('search/tweets', {
        q: `${request.query.match_params}`,
        count: 3,
        // geocode: "37.781157 -122.398720 100mi"
      },
      function(error, tweets, twitterResponse) {
    let b = appResponse;
    // debugger
    appResponse.send(tweets);
  });
  // });
  // return p;
});


app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});
