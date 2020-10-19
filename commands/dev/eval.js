const Discord = require("discord.js")
const client = new Discord.Client()

exports.run = async (client, message, args) => {
    if (!['414170295843160065'].includes(message.author.id)) {
    return message.channel.send(`${message.author},vc não tem perm!`)
    }
  
    let code = args.slice(0).join(" ");

        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }
          const embed = new Discord.MessageEmbed()
          .setTitle('<:terminal:710493226246602793> Console')
          .setDescription(`\`\`\`js\n${ev}\`\`\``)
          .setFooter('O comando funciona perfeitamente!')
          .setColor('GREEN')
        message.channel.send(embed)
        } catch(err) {
            const embed1 = new Discord.MessageEmbed()
            .setTitle('<:terminal:710493226246602793> Console')
            .setDescription(`\`\`\`js\n${err}\`\`\``)
            .setFooter('Há um erro no comando')
            .setColor('RED')
            message.channel.send(embed1)
        }
  }
 exports.help = {
      name: "eval",
   aliases: ['cmd', 'console']
 }