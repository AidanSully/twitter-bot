const Twit = require("twit");
const config = require("./config");

console.log("The bot is starting");

const T = new Twit(config);

const params = { q: "rainbow", count: 2 };

const gotData = (err, data, response) => {
  const tweets = data.statuses;
  for (let i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
};

T.get("search/tweets", params, gotData);
