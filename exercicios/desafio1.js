const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {

    const from = ctx.update.message.from
    console.log(from)
    
    if(ctx.update.message.from.id === 123){
        ctx.reply('Ao seu dispor, mestre.') 
    } else{
        ctx.reply('Sinto muito, só falo com o meu mestre.')
    }
}) 

bot.startPolling()
