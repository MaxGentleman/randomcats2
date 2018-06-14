const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login(process.env.TOKEN);

bot.on('ready', () => {
  bot.user.setGame('[;help] meowing');
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

    case ";pic" : cats = Math.floor(Math.random() * (cat.length - 0) + 0);
                message.channel.send(cat[cats]);
            break;

    case ";gif" : pos = Math.floor(Math.random() * (po.length - 0) + 0);
                message.channel.send(po[pos]);
            break;

    case ";laeti" : message.channel.send('Here is the cat of Laeti https://bit.ly/2JVIyrJ')
            break;

    case ";mg" : message.channel.send('Here is the cat of MaxGentleman https://bit.ly/2HSUH4e')
            break;
      
    case ";help" : message.channel.send({embed: {
			    color: 16737792,
			    author: {
			      name: bot.user.username,
			      icon_url: bot.user.avatarURL
			    },
			    title: "Robot Catten Help commands",

			    description: "Type these commands to get some help on how to use RandomCats",
			    fields: [{
				name: ";dev",
				value: "Say the names of the RandomCats developers"
			      },
			      {
				name: ";pic",
				value: "Send a random cat picture"
			      },
			      {
				name: ";gif",
				value: "Send a random cat gif"
			      },
			      {
				name: ";mg",
				value: "Show the cat of MaxGentleman"
			      },
			      {
				name: ";leati",
				value: "Show the cat of Laeti"
			      },
			    ],
			    timestamp: new Date(),
			    footer: {
			      icon_url: bot.user.avatarURL,
			      text: "© Robot Catten"
			    }
			  }
			});
	    break;
  }

     if (message.content.startsWith(";kick") && ( message.member.roles.find("names", "Moderators", "Admins", "Chainsawesome Games", "ADMIN", "Gentleman King"))) {
		// Easy way to get member object though mentions.
		var member= message.mentions.members.first();
		if(!(member.roles.find("name","Moderators" || "Admins" || "Chainsawesome Games" || "ADMIN" || "Gentleman King"))){
			// Kick
			member.kick().then((member) => {
			    // Successmessage
			    message.channel.send(":wave: " + member.displayName + " has been successfully kicked :ok_hand: ");
			}).catch(() => {
			     // Failmessage
			    message.channel.send("I cannot kick I'm not an admin");
			});
		} else {
			message.channel.send("Cannot kick an admin !");
		}
			
	}
	
module.exports.init = (handler: CommandHandler, database: Database, client: Client, config: Config) => {
    handler.createCommand(";enlist")
        .setDescription("Enlist yourself")
        .setCategory("Enlistment")
        .setCallback((context) => {
            try {
                let role = context.guild.roles.find(x => x.name === "enlisted");
                if (context.message.member.roles.some(x => x.name === "enlisted")) {
                    context.message.reply("You already have the role!");
                } else {
                    context.message.member.addRole(role);
                    context.message.reply("You've been enlisted! :ok_hand:");
                }
            } catch (e) {
                context.channel.send("***Please try again***");
            }
            context.message.delete();
        });
};
	
if(message.content.toLowerCase().startsWith(';say')) {
  var reason = message.content.substring(4, message.content.length);
  message.delete(); 
  message.channel.send(reason);
}
});

bot.on('message', msg => {
  if (msg.content === ';dev') {
    msg.reply('The dev is MaxGentleman#1337 with the help of Laeti#1995');
  }
});
