const Twit = require('twit')
const fs = require('fs')


var T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET,
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
})

const getAllTweets = async () => {
  const allTweets = [];

  let currentMaxId = -1;
  let currentTweets = [];

  do {
    const getResult = await doGet(currentMaxId);
    ({ id: currentMaxId, tweets: currentTweets } = getResult);

    allTweets.push(...currentTweets);
    console.log(allTweets.length + "tweets fetched... ");

  } while (currentTweets.length);

  return allTweets;
}

const doGet = async (currMaxId) => {
  let res = { tweets: [], maxId: 0 };

  let params = {
    screen_name: 'BartoltNoiro',
    count: 200,
    include_rts: 'true',
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

const getBadWords = async () => {
  fs.readFile('badwords.txt', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data.split('\r\n'));
  });
}



// getAllTweets().then(v => {
//   console.log("GOT ALL " + v.length + " TWEETS");
// });

getBadWords();



