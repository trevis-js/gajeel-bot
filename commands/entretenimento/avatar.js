const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    let ajuda = new Discord.MessageEmbed()
    .setTitle(`⁉️ Ajuda (${message})`)
    .setDescription(`ℹ️ Info:\`\`\`[] - Obrigatório\n() - Opcional\n<> - Valor obrigatório editavel\`\`\`\n🔎 Como utilizar?`)
    .addField(`🔖 Comando:`, `g!avatar (@usuario)`, true)
    .addField(`📋 Descrição:`, `Veja o avatar irado de algum membro ou o seu.`)
    .addField(`🗂️ Categoria:`, `Entretenimento`)
    .addField(`⚙️ Configurável:`, `Não`)
    .setFooter('Para mais ajuda utilize: g!help')
    if(args[0] === 'help') return message.channel.send(ajuda).then(a => {
        a.react(`🤔`).then(r => {

        })
        const DFilter = (reaction, user, ) => reaction.emoji.name === '🤔' && user.id === message.author.id;
        const D = a.createReactionCollector(DFilter)

        D.on('collect', r2 => {
            const embed1 = new Discord.MessageEmbed()
    .setTitle(`**<:picture:711592575282184303> • Avatar de ${message.author.username}**`)
    .setDescription(`**Aqui está uma demonstração do comando.**`)
    .setImage(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024}))
    .setFooter(message.author.username, message.author.avatarURL())
    .setTimestamp()
    a.edit(embed1)
        })
    })
let usuario = message.mentions.users.first() || client.users.cache.get(args[0])
if (!usuario) usuario = message.author;

const embed = new Discord.MessageEmbed()
.setTitle(`**<:picture:711592575282184303> • Avatar de ${usuario.username}**`)
.setDescription(`**Clique [aqui](${usuario.avatarURL()}) para baixar a imagem!**`)
.setImage(usuario.avatarURL({ format: 'png', dynamic: true, size: 1024}))
.setFooter(message.author.username, message.author.avatarURL())
.setTimestamp()

message.channel.send(embed);


};

exports.help = {
    name: "avatar",
    aliases: ['pic']
}