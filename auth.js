const dotenv = require('dotenv')
dotenv.config();
// REquiring npm trello module
var Trello = require("trello");
//Specifying the Trello credentials
var trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_API_TOKEN);


module.exports = trello;
