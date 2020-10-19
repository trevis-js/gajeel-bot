const db = require('quick.db');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var gif = db.delete(`gifs_${message.author.id}`)
    if(!gif) return message.reply('parece que você não setou um gif!')
    message.reply('gif removido!')

    }
    exports.help = {
        name: "remove-gif",
        aliases: ['rgif']
    }