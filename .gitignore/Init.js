/* VARIABLES */

const Discord = require("discord.js");

var prefix = Preferences.Prefix;
var footer = Preferences.Footer_Embed;

var bot = new Discord.Client();

/* EVENEMENT */

bot.on('ready', () => {
  console.log("bot ready")
});

/* FUNCTION */



/* LOGIN */

bot.login(process.env.TOKEN);
console.log("Login succesfully!");

bot.on("error", err => {
    console.log(err);
});
