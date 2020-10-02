console.log("The bot is starting");

const Twit = require("twit");
const config = require("./config");

const T = new Twit(config);
