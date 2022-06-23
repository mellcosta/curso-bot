const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx =>{
    const from =ctx.update.message.from.first_name
    ctx.reply(`Seja bem vinde, ${from}\n avise se precisar de /ajuda`)
})

bot.command('ajuda', ctx => ctx.reply('/ajuda: vou mostar opções'
    + '\n /ajuda2: Teste via hears'
    + '\n /op2: Opção genérica'
    + '\n /op2: Outra opção genérica qualquer'))

bot.hears('/ajuda2', ctx =>
    ctx.reply('Eu também capturo comandos'
    + ',mas utilize a /ajuda mesmo'))

bot.hears(/\/op(2|3)/i, ctx =>
    ctx.reply('Reposta padrão para comandos genéricos'))

bot.startPolling() 