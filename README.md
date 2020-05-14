# react-node-profanity-app

<dl>
  <dt>Description</dt>
  <dd>Twitter Profanity Search is a react app that scrapes a user's tweets and looks for potential instances of profanity. It makes calls to a Node.js backend server, (in the API folder) which fetches the user's tweets, checks tweets against a collection of curses, slurs (and words that can be used as slurs), then returns a list of words with tweets that feature them. It also includes a "flag as false positive" feature that places possible false positives in a text file for human review.</dd>
  <dt>Demo</dt>
  <dd>https://youtu.be/u9SPchHMPFM<dd>
</dl>

[![Twitter Profanity Search Demo](https://i.imgur.com/FH5gEGT.png)](https://www.youtube.com/watch?v=u9SPchHMPFM)

<dl>
  <dt>How to run locally (*REQUIRES Twitter API keys*)</dt>
</dl>

* Open app.js in /api/twitterScraper and enter your API keys on line 8-11
* From /api run **npm start**
* From /client run **npm start**
* Access on *http://localhost:3000/*
