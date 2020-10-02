const Twit = require("twit");
const config = require("./config");

console.log("The follow bot is starting");

const T = new Twit(config);

const tweetIt = (txt) => {
  const tweet = {
    status: txt,
  };

  const tweeted = (err, data, response) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(`It worked`);
    }
  };

  T.post("statuses/update", tweet, tweeted);
};

const followed = (eventMsg) => {
  console.log("Follow event!");
  const name = eventMsg.source.name;
  const screenName = eventMsg.source.screen_name;
  tweetIt(`@${screen_name} do you like cookies?`);
};

// Setting up a user stream
const stream = T.stream('status/filter', { track: '@nodejsbot5'});

// Anytime someone follows me
stream.on("follow", () => {
  console.log("Followbot started up");
});

// tweetIt();
// setInterval(tweetIt, 1000 * 20);
