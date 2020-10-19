const Discord = require("discord.js")
const db = require('quick.db');
exports.run = async (client, message, args) => {
let perm = new Discord.MessageEmbed()
.setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.")
.setDescription(`Parece que você não é meu desenvolvedor para colocar alguém na blacklist!`)
    if (!['414170295843160065'].includes(message.author.id)) {
    return message.reply(perm)
    }

    let member = message.mentions.users.first() || message.guild.members.get(args[1])
    if(member.bot) return message.reply("o usuário mencionado é um bot!")
    message.channel.send(`O desenvolvedor ${message.author} colocou ${member} na blacklist por ${args[1]}`)
    db.delete(`blacklist_${member.id}`, member.id)

}
exports.help = {
    name: "rblacklist",
    aliases: ['removeblacklist', 'rbl', 'removebl']
}