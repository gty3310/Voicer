const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const _twitter = require('twitter');
const keys = require('./keys');
app.use(express.static('public'));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

const twitter = new _twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  bearer_token: keys.bearer_token
});
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
// .then((body) => {
//   let results = JSON.parse(body);
//   console.log(results);
//   response.send(results);
// });
//
//
// twitter.get('search/tweets', {q: '#foodie'}, function(error, tweets, response) {
//   console.log(tweets);
// });

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});
