const Discord = require("discord.js")
const db = require('quick.db');

exports.run = async (client, message, args) => {
let perm = new Discord.MessageEmbed()
.setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.")
.setDescription(`Parece que você não é meu desenvolvedor para setar flocos!`)
    if (!['414170295843160065'].includes(message.author.id)) {
    return message.reply(perm)
    }
  
    if (!args[1]) return message.channel.send(`insira uma quantia!`)
    if (isNaN(args[1])) return message.channel.send(`NÚMERO!!!!!`)

    let member = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author;
    if(member.bot) return message.reply("o usuário mencionado é um bot!")
    
    message.channel.send(`O desenvolvedor ${message.author} setou ${args[1]} flocos no usuário ${member}!`)
    db.add(`flocos_${member.id}`, args[1])

}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'addflocos',
    aliases: []
}