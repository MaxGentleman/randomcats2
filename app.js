const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login(process.env.TOKEN);

bot.on('ready', () => {
  bot.user.setGame('[rc!help] meowing');
});

var cats;
var cat = ["https://bit.ly/2KFuqUP","https://bit.ly/2Eyk0T3","https://bit.ly/2JVnh1w","https://read.bi/2IlgzVs","https://bit.ly/2xmrMP4","https://bit.ly/2G1cEI3","https://bit.ly/2KNl4Xj","https://bit.ly/2IcDCOE","https://bit.ly/2rviPjk","https://bit.ly/2rxnkJb","https://bit.ly/2rw2udp","https://bzfd.it/2ru8O60",];

var pos;
var po = ["http://gph.is/1UOqRIl","http://gph.is/1LjlEFE","http://gph.is/2kBGOXz","https://gph.is/1LKJYOO","http://gph.is/1syVkDT","http://gph.is/2xcqIOA","http://gph.is/1kADt78", "http://gph.is/19ljcLO","http://gph.is/1Wv2LH6","http://gph.is/1sCO2yQ","http://gph.is/1oMTlpa",];


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
      
    case "rc!help" : message.channel.send({embed: {
			    color: 25515351,
			    author: {
			      name: bot.user.username,
			      icon_url: bot.user.avatarURL
			    },
			    title: "RandomCats Help commands",

			    description: "Type these commands to get some help on how to use RandomCats",
			    fields: [{
				name: "rc!dev",
				value: "Say the names of the RandomCats developers"
			      },
			      {
				name: "rc!pic",
				value: "Send a random cat picture"
			      },
			      {
				name: "rc!gif",
				value: "Send a random cat gif"
			      },
			      {
				name: "rc!mg",
				value: "Show the cat of MaxGentleman"
			      },
			      {
				name: "rc!laeti",
				value: "Show the cat of Laeti"
			      },
			    ],
			    timestamp: new Date(),
			    footer: {
			      icon_url: bot.user.avatarURL,
			      text: "© RandomCats"
			    }
			  }
			});
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
