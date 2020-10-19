const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (client, message, args) =>  {

const membro = message.mentions.members.first() || client.users.cache.get(args[0])

const embed = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Suas permissões aqui no ${message.guild} não lhe permitem banir este usuário`)
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(embed).then(deletei => {
setTimeout(() => {
    deletei.delete();
    }, 20000) 
    })

const member = message.mentions.members.first();
if(member === message.author) return message.reply('você não pode banir você mesmo!')
if (!member) return message.reply('mencione um membro!').then(deletando => {
    setTimeout(() => {
        deletando.delete();
        }, 20000) 
        })
        var motivo = args.slice(1).join(" ")
        if(!motivo) motivo = ('Motivo não informado')
        var gifs = db.get(`gifs_${message.author.id}`)
        const embed2 = new Discord.MessageEmbed().setTitle("<a:nop:718494836272922766> Algo de errado, não está certo.").setDescription(`Minhas permissões aqui no ${message.guild} não me deixam banir este usuário!`).setColor('WHITE')
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(embed2)
        if (!member.bannable) return message.reply("o usuário possui um cargo acima do meu!")

    const Embed = new Discord.MessageEmbed()
.setTitle('BANIMENTO')
.setDescription(`<a:ban:712722555013955634> Banidor por:\n${message.author.username}\n<:leaveguild:711593418761175103> Usuário punido:\n${member.user.tag}\n<:IconID:711594416078585867> ID do usuário:\n${membro.id}\n<:emoji_21:696171465241919499> Motivo:\n${motivo}`)
.setFooter('Usuário punido com sucesso!')
.setThumbnail(`${membro.user.avatarURL()}`)
.setTimestamp()
.setColor('RED')
.setImage(gifs)
membro.ban(`Banimento(${motivo}) | Gajeel Auditoria`)
message.channel.send(Embed).then(msg => {
    setTimeout(() => {
        msg.delete()
    }, 10000);
})
const notify = new Discord.MessageEmbed()
.setTitle('<:notify:710496410788823070> NOTIFICAÇÃO DE BANIMENTO')
.setDescription(`<:notlike:721072729813680149> Ow no!!!\n<a:aItemModBanHammer:721073859691937942> Você fez algo que o ademiro não gostou e acabou sendo banido.\n\n<:perola:711592341311324242> Ban Info:\n\n<a:seta2LC:711594210544844811> Motivo do ban: ${motivo}\n<a:seta2LC:711594210544844811> Servidor: ${message.guild}`)
.setFooter(`Banido por ${message.author.tag}`)
.setColor('RED')
membro.send(notify)
const canal2 = client.channels.cache.get('697065463494213682')
const Embed3 = new Discord.MessageEmbed()
.setTitle('BANIMENTO')
.setDescription(`<a:ban:712722555013955634> Banidor por:\n${message.author.username}\n<:leaveguild:711593418761175103> Usuário punido:\n${member.user.tag}\n<:IconID:711594416078585867> ID do usuário:\n${membro.id}\n<:emoji_21:696171465241919499> Motivo:\n${motivo}`)
.setFooter('Usuário punido com sucesso!')
.setThumbnail(`${membro.user.avatarURL()}`)
.setImage(gifs)
.setColor('RED')
.setTimestamp()
canal2.send(Embed3)
  
var canal = message.guild.channels.cache.get(db.get(`punichannel_${message.guild.id}`))
if (!canal) {
    message.channel.send(`${message.author} **Parece que você ainda não possui um canal de logs staff. Para setar use: g!logs-staff #canal**`).then(s => {
        setTimeout(() => {
            s.delete()
        }, 15000);
    })
} else {
 canal.send(Embed3)
}
message.delete()
}
exports.help = {
    name: "ban",
    aliases: ['banir', 'some'] 
} 