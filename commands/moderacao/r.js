const Discord = require("discord.js");
exports.run = (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('<:emoji_2:695993064258273350>| você não tem permissão').then(deletei => {
        setTimeout(() => {
            deletei.delete();
            }, 2000) 
            })

var usuario = message.mentions.members.first()
if (!usuario) return message.reply('Você não mencionou nenhum usuário')

var cargo = message.mentions.roles
if (!cargo) return message.reply('Você não mencionou nenhum cargo!')
var nome = message.mentions.roles.map(r => r)
usuario.roles.add(cargo)
let Embed = new Discord.MessageEmbed()
.setTitle(`Registrador: ${message.author.tag}\nRegistrado: ${usuario.user.tag}`)
.setDescription(`Cargos setados: ${nome}`)
.setFooter(`Sistema de registro do ${client.user.username}`)
.setTimestamp()
.setThumbnail(`${message.author.avatarURL()}`)
.setColor("#ff8065")

message.channel.send(Embed)
message.delete()

const embed = new Discord.MessageEmbed()
.setTitle("<:emoji_38:701201696767869091>|Você foi registrado")
.setDescription(`**Registrador:** ${message.author.tag}\n**Servidor:** ${message.guild}`)
.addField(`**Cargos setados:** ${nome}`)
.setThumbnail(`${message.guild.iconURL()}`)
.setFooter(message.author.id, message.author.avatarURL())
.setTimestamp()
.setColor('PURPLE')
usuario.send(embed)

};
exports.help = {
    name: "r",
    aliases: ['addrole', 'addcargo']
}