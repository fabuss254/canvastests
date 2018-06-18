/* VARIABLES */

const Discord = require("discord.js");
const gd = require('node-gd');

var prefix = "%";
var footer = "Created by Fabuss254#9232";

var bot = new Discord.Client();

/* EVENEMENT */

bot.on('ready', () => {
  console.log("bot ready")
});

bot.on('message', message => {
  if (message.author.equals(bot.user)) return;
  var args = message.content.substring(prefix.length).split (" ");
  if (!message.content.startsWith(prefix)) return;
  switch (args[0].toLowerCase()) {
    
    case "canvas1":
      var img = gd.createSync(200, 80);
      img.colorAllocate(0, 255, 0);
      var txtColor = img.colorAllocate(255, 0, 255);
      var fontPath = './Fonts/Ezo.ttf';
      img.stringFT(txtColor, fontPath, 24, 0, 10, 60, 'Hello world!');
      img.savePng('output.png', 1, function(err) {
        if(err) {
          throw err;
        }
        message.send({files: [{attachment: 'output.png',name: 'output.png'}]})
      });

      // Destroy image to clean memory
      img.destroy();
      
    default:
      message.channel.send("Invalid command!").then(msg => msg.delete(5000));
      message.delete(100);
    break;
  }
});

/* FUNCTION */



/* LOGIN */

bot.login(process.env.TOKEN);
console.log("Login succesfully!");

bot.on("error", err => {
    console.log(err);
});
