const Twit = require('twit');
const fs = require('fs').promises;
const fsv = require('fs');

const txtsPath = "./twitterScraper/txts/";

var T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET,
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
})

const getAllTweets = async (handle) => {
  const allTweets = [];

  let currentMaxId = -1;
  let currentTweets = [];

  do {
    const getResult = await fetchTweets(handle, currentMaxId);

    // Ran out of tweets (same id)
    if (currentMaxId === getResult.maxId) break;

    ({ maxId: currentMaxId, tweets: currentTweets } = getResult);

    allTweets.push(...currentTweets);
    console.log(allTweets.length + " tweets fetched... ");

  } while (currentTweets.length);

  return allTweets;
}

const getProfanityReport = async (tweets) => {
  const tweetText = tweets.map(tweet => tweet.text);

  const reference = await getReferenceWords();

  let wordCount = {};
  let wordInstances = {};

  for (let i = 0; i < tweets.length; i++) {
    processTweet(tweetText[i], reference, { wordCount, wordInstances });
  }

  console.log("DONE!");

  wordCount = Object.keys(wordCount).map(function (key) {
    return [key, wordCount[key]];
  });

  wordInstances = Object.keys(wordInstances).map(function (key) {
    return [key, wordInstances[key]];
  });

  return { wordCount, wordInstances };
}

const fetchTweets = async (handle, currMaxId) => {
  let res = { tweets: [], maxId: 0 };

  let params = {
    screen_name: handle,
    count: 200,
    include_rts: 'false',
  };

  if (currMaxId != -1) params.max_id = currMaxId;

  await T.get('statuses/user_timeline', params).then(
    ({ data }) => {
      res.maxId = data.length ? data[data.length - 1].id : null;
      res.tweets = data;
    }
  ).catch((err) => {
    console.log(err)
  });

  return res;
}



const processTweet = (tweet, reference, res) => {
  var words = tweet.split(/([ .,;!'\r\n']+)/g);

  foundWords = {};

  for (const word of words) {
    if (!(word in foundWords)) {
      if (processWord(tweet, word, reference, res)) {
        foundWords[word] = true;
      }
    }
  }
}

const processWord = (tweet, word, { badWords, falsePositives }, { wordCount, wordInstances }) => {
  if (word[0] === '@' || word.includes('co/')) return false;      // ignore "https://t.co/xxxxxx" links 

  const wordL = word.toLowerCase();

  for (const badWord of badWords) {
    if (wordL.includes(badWord) && !falsePositives.has(wordL)) {
      // Previous instance of badWord found
      if (wordCount[word]) {
        wordCount[word]++;
        wordInstances[word].push(tweet)
      }
      // First instance of badWord
      else {
        wordCount[word] = 1;
        wordInstances[word] = [tweet];
      }
      return true;
    }
  }

  return false;
}


const getReferenceWords = async () => {
  let badWords, falsePosArr;

  await fs.readFile(txtsPath + 'badwords.txt', 'utf8').then(data => {
    badWords = data.split('\r\n')
  });

  await fs.readFile(txtsPath + 'falsepositives.txt', 'utf8').then(data => {
    falsePosArr = data.split('\r\n')
  });

  // Convert array to map for constant search time
  const falsePositives = new Map(falsePosArr.map(i => [i, true]));

  return { badWords, falsePositives };
}

const openStream = async () => {
  return await fsv.createWriteStream(txtsPath + "temp-fpos.txt", { flags: 'a' });
}

const addToStream = (stream, fpWord) => {
  stream.write(fpWord + '\r\n');
}

exports.getAllTweets = getAllTweets;
exports.getProfanityReport = getProfanityReport;
exports.openStream = openStream;
exports.addToStream = addToStream;


