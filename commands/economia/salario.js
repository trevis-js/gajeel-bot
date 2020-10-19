const db = require('quick.db');
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    let daily = db.fetch(`ss_${message.guild.id}`)
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));}

}//Fim do exports.run
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'salario',
    aliases: []
}