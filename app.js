const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = ";";
const version = "0.4.9";
var cmdExec = 0;
const fs = require("fs");
let data = JSON.parse(fs.readFileSync("./data.json", "utf8"));


bot.login(process.env.TOKEN);

bot.on('ready', () => {
  bot.user.setActivity("[;help] meowing", { type: 'PLAYING' });
});
	
var cats;
var cat = ["https://bit.ly/2KFuqUP","https://bit.ly/2Eyk0T3","https://bit.ly/2JVnh1w","https://read.bi/2IlgzVs","https://bit.ly/2xmrMP4","https://bit.ly/2G1cEI3","https://bit.ly/2KNl4Xj","https://bit.ly/2IcDCOE","https://bit.ly/2rviPjk","https://bit.ly/2rxnkJb","https://bit.ly/2rw2udp","https://bzfd.it/2ru8O60","https://bit.ly/2lcw7xD",];

var pos;
var po = ["http://gph.is/1UOqRIl","http://gph.is/1LjlEFE","http://gph.is/2kBGOXz","https://gph.is/1LKJYOO","http://gph.is/1syVkDT","http://gph.is/2xcqIOA","http://gph.is/1kADt78", "http://gph.is/19ljcLO","http://gph.is/1Wv2LH6","http://gph.is/1sCO2yQ","http://gph.is/1oMTlpa",];

var cos;
var co = ["PhantomUniform0's Cat https://bit.ly/2rrp0DU","PhantomUniform0's Cat https://bit.ly/2HY2UEf","PhantomUniform0's Cat https://bit.ly/2wkNKne","PhantomUniform0's Cat https://bit.ly/2MreCFY","Ennalorac's Cat https://bit.ly/2ldoY00","Jeto_QC's Cat https://bit.ly/2HSY2v8"];

bot.on('ready', () => {
  console.log(`${bot.user.tag} is now connected on Discord! Made by MaxGentleman #1337, version 0.76.9`);
});

bot.on('message', function (message){
  switch(message.content.toLowerCase()){
		  
    case prefix + "pic" : cats = Math.floor(Math.random() * (cat.length - 0) + 0);
                message.channel.send(cat[cats]);
            break;

    case prefix + "gif" : pos = Math.floor(Math.random() * (po.length - 0) + 0);
                message.channel.send(po[pos]);
            break;
		  
    case prefix + "communitycats" : cos = Math.floor(Math.random() * (co.length - 0) + 0);
                message.channel.send(co[cos]);
            break;

    case prefix + "laeti" : message.channel.send('Here is the cat of Laeti https://bit.ly/2JVIyrJ')
            break;

    case prefix + "mg" : message.channel.send('Here is the cat of MaxGentleman https://bit.ly/2HSUH4e')
            break;
      
    case prefix + "help" : message.channel.send({embed: {
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
				name: ";communitycats",
				value: "Send random community cats"
			      },
			      {
				name: ";mg",
				value: "Show the cat of MaxGentleman"
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

     if (message.content.startsWith(";kick") && ( message.member.roles.find("name", "Moderators") ||  message.member.roles.find("name", "Admins") || message.member.roles.find("name", "Gentleman King"))){
		// Easy way to get member object though mentions.
		var member= message.mentions.members.first();
		if(!(member.roles.find("name", "Moderators") || member.roles.find("name", "Admins") || member.roles.find("name", "Gentleman King"))){
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
	
if(message.content.toLowerCase().startsWith(';say')) {
  var reason = message.content.substring(4, message.content.length);
  message.delete(); 
  message.channel.send(reason);
}
});

bot.on('message', message => {
  if (message.content === ';dev') {
    message.reply('The dev is MaxGentleman#1337 with the help of Laeti#1995 and Pie#9196');
  }
	
if (message.content.toLowerCase().startsWith(prefix + "enlist")) {
    cmdExec++;
    // msg.guild.me.permissions.has(["VIEW_CHANNEL", "SEND_MESSAGES",]) for dashboard
      let permission = message.guild.me.permissions.has(["MANAGE_ROLES", "EMBED_LINKS", "ATTACH_FILES"]);
      if (!permission) {
        const noperm = new Discord.RichEmbed()
        .setColor("#FF8000")
        .addField("Don't have permission!", "Well this is awkward... I don't have the following perms:\n`MANAGE_ROLES`\n`EMBED_LINKS`\n`ATTACH_FILES`\nPlease tell a moderator or give me those perms.")
        .setTimestamp()
        .setFooter(`${version}`)
        message.channel.send({embed: noperm});
      } else {
      let role = message.guild.roles.find("name", "Enlisted");
      if (!role) {
        // If server has no role, going to be changing that to be creating the role, then giving the role or if that fails with perms, give embed back.
        const welp = new Discord.RichEmbed()
        .setColor('#FF8000')
        .addField("Whoops!", "This server doesn't have the `Enlisted` role yet!\nI'll be attempting to create the role!")
        .setTimestamp()
        .setFooter(`${version}`)
        // Actually works
        message.channel.send(`<@${message.author.id}>`, {embed: welp}).then((msg) => {
        const creating = new Discord.RichEmbed()
        .setColor('#FF8000')
        .addField("Creating role...", "Please wait.")
        .setTimestamp()
        .setFooter(`${version}`)
        msg.edit(`<@${message.author.id}>`, {embed: creating});
        message.guild.createRole({
        name: 'Enlisted',
        color: '#138FF4',
        }).then(role => {
          const giving = new Discord.RichEmbed()
          .setColor('#FF8000')
          .addField("Giving role...", "Please wait.")
          .setTimestamp()
          .setFooter(`${version}`)
          msg.edit(`<@${message.author.id}>`, {embed: giving});
          message.member.addRole(role).catch(error => {
            msg.edit('sad');
          })
          const success = new Discord.RichEmbed()
          .setColor('#FF8000')
          .addField("Yay!", "You have been enlisted!")
          .setTimestamp()
          .setFooter(`${version}`, "https://cdn.discordapp.com/attachments/378252696462819330/457437943867375628/Robot_Catten_LOGO_png.png")
          msg.edit(`<@${message.author.id}>`, {embed: success});
          if (!data[message.guild.id]) data[message.guild.id] = {
          enlisted: 0,
          joined: 0,
          left: 0
        };
          let serverData = data[message.guild.id];
          serverData.enlisted++;
          fs.writeFile("./data.json", JSON.stringify(data), (err) => {
          if (err) console.error(err)
          });
          const ahChannel = message.guild.channels.find(c=> c.permissionsFor(message.guild.me).has("SEND_MESSAGES"));
          const welche = new Discord.RichEmbed()
          .setThumbnail(message.author.avatarURL)
          .setColor('#FF8000')
          .addField("New member!", `Say hello to **${message.author.username}**#${message.author.discriminator}!`)
          .setTimestamp()
          .setFooter(`${version}`, "https://cdn.discordapp.com/attachments/378252696462819330/457437943867375628/Robot_Catten_LOGO_png.png")
          // Change this to the channel which was chosen in invite setup/dashboard
          ahChannel.send(`<@${message.author.id}>`, {embed: welche});
        }, 700).catch(error => {
            msg.edit(`${error}`);
          });
        }, 700);
          } else {
            if (message.member.roles.has(role.id)) {
              // If author already has "Enlisted"/Custom Role (Support soon, will be able to change via app, web and bot), give this embed.
              const already = new Discord.RichEmbed()
              .setColor('#FF8000')
              .addField("Already have the role!", "You already have the role.\nCan't enlist yourself twice.")
              .setTimestamp()
              .setFooter(`${version}`, "https://cdn.discordapp.com/attachments/378252696462819330/457437943867375628/Robot_Catten_LOGO_png.png")
              message.channel.send(`<@${message.author.id}>`, {embed: already});
            } else {
              message.member.addRole(role).catch(console.error);
              // Gives Enlisted role.
              const success = new Discord.RichEmbed()
              .setColor('#FF8000')
              .addField("Yay!", "You have been enlisted")
              .setTimestamp()
              .setFooter(`${version}`, "https://cdn.discordapp.com/attachments/378252696462819330/457437943867375628/Robot_Catten_LOGO_png.png")
              message.channel.send(`<@${message.author.id}>`, {embed: success});
              if (!data[message.guild.id]) data[message.guild.id] = {
              enlisted: 0,
              joined: 0,
              left: 0
              };
              let serverData = data[message.guild.id];
              serverData.enlisted++;
              fs.writeFile("./data.json", JSON.stringify(data), (err) => {
              if (err) console.error(err)
              });
              const welche = new Discord.RichEmbed()
              .setThumbnail(message.author.avatarURL)
              .setColor('#FF8000')
              .addField("New member!", `Say hello to **${message.author.username}**#${message.author.discriminator}!`)
              .setTimestamp()
              .setFooter(`${version}`, "https://cdn.discordapp.com/attachments/378252696462819330/457437943867375628/Robot_Catten_LOGO_png.png")
              // Change this to the channel which was chosen in invite setup/dashboard
              message.channel.send(`<@${message.author.id}>`, {embed: welche});
            }
        }
    }
}
	
       });
