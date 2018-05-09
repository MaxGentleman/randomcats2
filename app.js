const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
  bot.user.setGame('[rc!help] meowing');
});

var cats;
var cat = ["https://bit.ly/2KFuqUP","https://bit.ly/2Eyk0T3","https://bit.ly/2JVnh1w","https://read.bi/2IlgzVs","https://bit.ly/2xmrMP4",];

var pos;
var po = ["http://gph.is/1UOqRIl","http://gph.is/1LjlEFE","http://gph.is/2kBGOXz","https://gph.is/1LKJYOO",];


bot.on('ready', () => {
  console.log(`${bot.user.tag} is now connected on Discord! Made by MaxGentleman #1337, version 0.76.9`);
});

bot.on('message', function (message){
  switch(message.content.toLowerCase()){

    case "rc!pic" : cats = Math.floor(Math.random() * (cat.length - 0) + 0);
                message.channel.send(cat[cats]);
            break;

    case "rc!gif" : pos = Math.floor(Math.random() * (po.length - 0) + 0);
                message.channel.send(po[pos]);
            break;

    case "rc!laeti" : message.channel.send('Here is the cat of Laeti https://bit.ly/2JVIyrJ')
            break;

    case "rc!mg" : message.channel.send('Here is the cat of MaxGentleman https://bit.ly/2HSUH4e')
            break;

            case "rc!help" : message.channel.send('**1) rc!pic :** Send a random cat picture\n'+
            '**2) rc!gif :** Send a random cat gif\n'+
            '**3) rc!dev :** Send a random cat picture\n'+
            '**4) rc!mg :** Send the cat of MaxGentleman\n'+
            '**5) rc!laeti :** Show the cat of Laeti');
            break;
  }

if(message.content.toLowerCase().startsWith('rc!say')) {
  var reason = message.content.substring(6, message.content.length);
  message.delete(); 
  message.channel.send(reason);
}
});

bot.on('message', msg => {
  if (msg.content === 'rc!dev') {
    msg.reply('The dev is MaxGentleman#1337 with the help of Laeti#1995');
  }
});

bot.login('MzQwMjA1MDEyNDU2MzA4NzQ2.DdDxUg.ivQ4ACeWQdr8qsgEhkn2uUu6Ox8');
