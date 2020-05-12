# react-node-profanity-app

<dl>
  <dt>Description</dt>
  <dd>Twitter Profanity Search is a react app that scrapes a user's tweets and looks for possible instances of profanity. It makes calls to the Node.js backend server, (in the API folder) which fetches the user's tweets, looks for profanity, then returns a list of words with tweets that feature them.</dd>
  <dt>Demo</dt>
  <dd>https://youtu.be/u9SPchHMPFM<dd>
</dl>

[![Twitter Profanity Search Demo](https://i.imgur.com/FH5gEGT.png)](https://www.youtube.com/watch?v=u9SPchHMPFM)

<dl>
  <dt>How to run locally (**requires Twitter API keys**)</dt>
</dl>

* Open app.js in /api/twitterScraper and enter your API keys on line 8-11
* From /api run **npm start**
* From /client run **npm start**
* Access on *http://localhost:3000/*
