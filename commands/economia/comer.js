const Discord = require('discord.js')
const db = require('quick.db')
exports.run = (client, message, args) => {
    var a = args[0]
    var n = args[1]
    if(a === 'queijo') return message.reply(`hmm que delícia. Você comeu ${n} queijo(s)`).then(q => { setTimeout(() => {q.delete()}, 8000);}), db.subtract(`Queijo_${message.author.id}`, n), db.subtract(`comida_${message.author.id}`, n)
    if(a === 'pimenta') return message.reply(`hmm que delícia. Você comeu ${n} pimenta(s)`).then(p => { setTimeout(() => {p.delete()}, 8000);}), db.subtract(`comida_${message.author.id}`, n), db.subtract(`Pimenta_${message.author.id}`, n)
    if(a === 'combo') return message.reply(`hmm que delícia. Você comeu ${n} combo(s)`).then(c => { setTimeout(() => {c.delete()}, 8000);}), db.subtract(`Combo_${message.author.id}`, n), db.subtract(`comida_${message.author.id}`, n)
}
exports.help = {
    name: 'comer',
    aliases: ['zahsvayvyf']
}