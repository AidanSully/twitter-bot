const Twit = require("twit");
const config = require("./config");

console.log("The bot is starting");

const T = new Twit(config);

const tweet = {
  status: "#codingrainbow from node.js",
};

const tweeted = (err, data, response) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`It worked`);
  }
};

T.post("statuses/update", tweet, tweeted);
