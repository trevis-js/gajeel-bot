const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, message, args) => {
    let ajuda = new Discord.MessageEmbed()
    .setTitle(`⁉️ Ajuda (${message})`)
    .setDescription(`ℹ️ Info:\`\`\`[] - Obrigatório\n() - Opcional\n<> - Valor obrigatório editavel\`\`\`\n🔎 Como utilizar?`)
    .addField(`🔖 Comando:`, `g!test-wlc`, true)
    .addField(`📋 Descrição:`, `Teste sua mensagem e canal de bem vindo`)
    .addField(`🗂️ Categoria:`, `Configuráveis`)
    .addField(`⚙️ Configurável:`, `Não`)
    .setFooter('Para mais ajuda utilize: g!help')
    if(args[0] === 'help') return message.channel.send(ajuda).then(a => {
        a.react(`🤔`).then(r => {

        })
        const DFilter = (reaction, user, ) => reaction.emoji.name === '🤔' && user.id === message.author.id;
        const D = a.createReactionCollector(DFilter)

        D.on('collect', r2 => {
            const embed1 = new Discord.MessageEmbed()
    .setTitle(`**Comando sem demonstração**`)
    .setDescription(`**O comando não possui demonstração**`)
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp()
    a.edit(embed1)
        })
    })
    var autoChannel = message.guild.channels.cache.get(db.get(`autoChannel_${message.guild.id}`))
    if(!autoChannel) return message.reply('você ainda não setou nenhum canal de bem vindo')
    var mensagem = db.get(`mensagem_${message.guild.id}`)
    message.channel.send('<a:loadgajeel:719545323927896185> | Processando...').then(msg => {
        setTimeout(() => {
            msg.edit('<a:loadgajeel:719545323927896185> | Processando......')
        }, 5000);

        setTimeout(() => {
            msg.edit('<a:loadgajeel:719545323927896185> | Processando.........')
        }, 10000);

        setTimeout(() => {
            msg.edit('<a:loadgajeel:719545323927896185> | Processando............')
        }, 15000);

        setTimeout(() => {
            msg.edit('<a:g_valido:722028414118395945> | Enviado')
            autoChannel.send(mensagem)
        }, 18000);
    })
}
exports.help = {
    name: "test-wlc",
    aliases: []
}