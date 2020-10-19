const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const db = require('quick.db')
const moment = require('moment');
moment.locale('pt-BR')

exports.run = (bot, message, args) => { // setando a base
    var gm = db.get(`gm_${message.guld.id}`)
    let region = { // para deixar mais bacana o codigo, iremos configurar o nome dos locais
        "brazil": "Brasil",
        "eu-central": "Europa Central",
        "singapore": "Singapura",
        "us-central": "U.S Central",
        "sydney": "Sydney",
        "us-east": "U.S Leste",
        "us-south": "U.S Sul",
        "us-west": "U.S Oeste",
        "eu-west": "Europa Ocidental",
        "vip-us-east": "VIP U.S Lest",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };

    let embed = new Discord.MessageEmbed()
    .setAuthor(`<:perola:711592341311324242> ${message.guild.name}`, message.guild.iconURL)
    .setColor('GOLD')
    .addField(`**<:IconCrown:711594381827637399> Dono**`, `${message.guild.owner}`, true)
    .addField(`**Foi criado em**`, `${moment(message.guild.createdAt).format('LLL')}`, true)
    .addField(`**Você se juntou aqui em**`, `\`${moment(message.member.joinedAt).format('LLL')}\``)
    .addField(`**Eu entrei aqui em**`, `${moment(bot.user.joinedAt).format('LLL')}`)
    .addField(`**Canais**`, message.guild.channels.cache.size, true)
    .addField(`**Membros**`, message.guild.memberCount, true) 
    .addField(`**Região**`, `${region[message.guild.region]}`, true)
    .addField(`**Guild Money(GM)**`, gm, true)

    message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'serverinfo',
    aliases: []
}