const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const cpuStat = require("cpu-stat");
 const os = require('os')
const moment = require('moment'); // puxando o NPM 'moment' (instale utilizando: npm i moment)
moment.locale('pt-BR') // definindo o moment para BR

exports.run = (client, message, args) => { // puxando a base

    // sistema para identificar a quanto tempo o bot esta online!
    let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (client.uptime / 1000); 
     let horas = Math.floor(totalSegundos / 3600); 
     totalSegundos %= 3600; 
     let minutos = Math.floor(totalSegundos / 60); 
     let segundos = Math.floor(totalSegundos % 60); 
 
     if(horas > 23){
         dias = dias + 1;
         horas = 0; 
     }
 
     if(dias == 7){ 
         dias = 0; 
         week = week + 1; 
     }
 
     if(week > 0){ 
         uptime += `${week} week, `;
     }
 
     if(minutos > 60){ 
         minutos = 0;
     }
 
     uptime += `${horas}h ${minutos}m ${segundos}s`;

    const dono = '414170295843160065'
    var young = (`[trevis, trxvis ou travis(sla)](https://twitch.tv/trev1s_)`)
    var nome = (`[${client.user.username}](https://discordapp.com/oauth2/authorize?=&client_id=693261042402328576&scope=bot&permissions=8)`)
    var ling = ('[JavaScript](https://nodejs.org)')
    var bd = ('[Quick.db](https://quickdb.js.org)')
    var discloud = ('[DisCloud](https://discloudbot.com)')
    let embed = new Discord.MessageEmbed()

    .setTitle(`<:perola:711592341311324242> | Info ${client.user.username}`)
    .addField(`**<:ids:710494283550949409> | Nome:**`, nome,true)
    .addField(`**<a:HackerYu:722858172053979248> | CPU:**`, `\`\`\`Modelo: ${os.cpus().map(i => `${i.model}`)[0]}\nMemória utilizada: ${(process.memoryUsage().heapUsed / 512 / 512).toFixed(2)} / ${(os.totalmem() / 512 / 512).toFixed(2)} MB\`\`\``)
    .addField(`**<a:rede:715214696696774696> | Latência:**`, `${parseInt(client.ws.ping)} ms`, true)
    .addField(`**<:tempo:710493397051506840> | Uptime:**`, uptime, true)
    .addField(`**<a:devloading:709477875698630697> | Servidores:**`, `${client.guilds.cache.size}`, true)
    .addField(`**<:usersall:709477224805302283> | Membros:**`, `${client.users.cache.size}`, true)
    .addField(`**<a:coroa:709473056375963668> | Criador**`, young, true)
    .addField(`**<:js:726764114667634750> | Linguagem:**`, ling, true)
    .addField(`**<:container:718962249498361889> | Banco de dados:**`, bd, true)
    .addField(`**<:terminal:710493226246602793> | Host**`, discloud, true)
    .setColor('#00000')
    .setThumbnail('https://cdn.discordapp.com/attachments/689819622534414436/715216782398586950/info.png')

    message.channel.send(embed)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'info',
    aliases: ['botinfo']
}