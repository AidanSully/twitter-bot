const Twit = require("twit");
const config = require("./config");
const fs = require("fs");

console.log("The image bot is starting");

const T = new Twit(config);

const tweeted = (err, data, response) => {
  if (err) {
    console.log(`${err} ${data.status}`);
  } else {
    console.log(`It worked`);
  }
};

const uploaded = (err, data, response) => {
  // This is where i will tweet
  const id = data.media_id_string;
  const tweet = {
    status: "#codingrainbow live from node.js",
    media_ids: [id],
  };
  T.post("statuses/update", tweet, tweeted);
};

const processing = () => {
  const filename = "rainbow/output.png";
  const params = {
    encoding: "base64",
  };
  const b64 = fs.readFileSync(filename, params);

  T.post("media/upload", { media_data: b64 }, uploaded);
};

const tweetIt = (txt) => {
  const command = "processing-java --sketch=`pwd`/rainbow --run";
  const exec = require("child_process").exec;

  exec(command, processing);
};

// tweetIt();
// setInterval(tweetIt, 1000 * 20);
