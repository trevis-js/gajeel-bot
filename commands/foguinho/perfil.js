const db = require('quick.db');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var member = message.mentions.users.first() || message.author
    var likes = db.get(`rep_${member.id}`)
    var desc = db.get(`desc_${member.id}`)
    var mg = db.get(`img_${member.id}`)
    var ft = db.get(`ft_${member.id}`)
    if(!desc) desc = 'Parece que usuário ainda não tem uma biografia no **Foguinho**'
    if(!likes) likes = 'Parece que usuário ainda não tem nenhum like no **Foguinho**'

    const embed = new Discord.MessageEmbed()
    .setTitle('<:g_tinder:731218404546969620> Foguinho')
    .setDescription(`<:ItemPlan:711593068599443536> **Bio:**\n\`\`\`${desc}\`\`\`\n<a:g_like:731506317017219175> **Likes:**\n${likes}`)
    .setImage(mg)
    .setThumbnail(ft)
    .setFooter(`Perfil de: ${member.username}`, member.avatarURL)
    .setColor('#ff0061')

    message.channel.send(embed)
}

exports.help = {
    name: 'perfil',
    aliases: ['profile']
}