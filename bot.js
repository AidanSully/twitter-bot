const Twit = require("twit");
const axios = require("axios");
const config = require("./config");

console.log("The fact-spitta bot is starting");

const T = new Twit(config);

const tweetComplete = (err, data, response) => {
  if (err) {
    console.log(`${err} ${data.status}`);
  } else {
    console.log(`It worked`);
  }
};

const tweetFact = () => {
  axios
    .get("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((res) => {
      console.log(res.data.text);
      const tweet = {
        status: res.data.text,
      };
      T.post("statuses/update", tweet, tweetComplete);
    })
    .catch((error) => {
      console.log(error);
    });
};

// tweetFact();
setInterval(tweetFact, 1000 * 60 * 60); // 1s 1m 1h 12h
