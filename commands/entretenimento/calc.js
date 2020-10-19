const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const math = require('mathjs'); // puxando o NPM 'mathjs' (instale utilizando: npm i mathjs)
const ms = require('ms'); // puxando o NPM 'ms' (instale utilizando: npm i ms)

exports.run = async (client, message, args) => { // setando a base, com async

    var conta = args.slice(0).join(' ');
    if(!conta.content === '*+-/') return message.reply('coloque sinais válidos!\nEx: 2*2 2-2 2+2 2/2 ')
    if (!conta) return message.reply('por favor escreva uma conta!') // caso o membro nao escreva uma conta
                         // filtrando o que o membro enviou, com o NPM Mathjs, criando a conta
                       try{  let embed = new Discord.MessageEmbed()
                         .setTitle('Calculadora')
                         .setDescription(`Você inseriu essa conta: \`${conta}\`\nE o resultado dela foi: **${math.evaluate(args.join(' '))}**`)
   message.channel.send(embed)} catch (err){
    console.log(err)
    message.reply('insira somente números!')
   }
}

exports.help = { // setando o nome do arquivo, seguido do prefix
  name: 'calc',
  aliases: ['calculadora', 'conta']
}