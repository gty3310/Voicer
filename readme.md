## TweetsMap - A web app for visualizing news by location. / Google Trends but for Twitter

### Background and Overview

TweetsMap is a web app for visualizing people's discussions about news, map to their location.

This app is inspired from Google Trends which displays trends for keyword-searches by location. TweetsMap however, uses Twitter's data but try to do the same thing.

This web app uses Twitter API and google API for realtime data source. And D3 library for data visualization.


### Functionality & MVP  

In StochAsteroids, users will be able to:

- [ ] Type in a topic
- [ ] See a heat map of related tweets by its location on a world map
- [ ] Choose one topic from a list of the most popular news topics

### Wireframes

This app will consist of a single screen with the simulation canvas, input field, instrument selectors and nav links to the Github, my LinkedIn, and the About Page.  

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and app logic,
<!-- - `HTML5 Canvas` for DOM manipulation and rendering, -->
- `Twitter API` for data source
- `D3 JavaScript package` for data visualization

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`. Showing a world map in D3

- [ ] Signup for Twitter Developer account
- [ ] Find API for getting Twitter data
- [ ] Setup the D3 package and showing a world map graph

**Day 2**: Dedicate this day to learn D3:

- [ ] Be able to show any data on the world map
- [ ] Have a way to store all the data

**Day 3**: Dedicate this day to show information about tweets on the app. Goals for the day:

- [ ] Get Tweets based on users' request using third party npm package
- [ ] Store information about Tweets in the frontend

**Day 4**: Setup the number of tweets based on the . Goals for the day:

- [ ] Enable the frontend to re-render to information on the map in realtime
- [ ] Setup a the second table using D3 to show the trend for the time of appearance of these tweets

### Bonus features

There are many directions in which this project could evolve.

- [ ] Use google api to get a list of most popular news topics
- [ ] Use another api to analyze people's emotion based on the tweets. 

# Live Website
https://voicer-app.herokuapp.com/?
