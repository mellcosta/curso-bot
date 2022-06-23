const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const tecladoBebidas = Markup.keyboard([
    ['🥛Água', '🍹Sumo'],
    ['☕️Café', '🍻Cerveja'],
    ['🍷Vinho', '🍾Champanhe'],
    ['🙃Nada']
]).resize().extra()

bot.start(async ctx => {
    const from = ctx.update.message.from.first_name
    await ctx.reply(`Cordiais saudações, Sre. ${from}`)
    await ctx.reply(`Seja bem vinde ao nosso restaurante`)
    await ctx.reply(`Está pronte para pedir?`,
        Markup.keyboard(['👍Sim', '👎Não']).resize()/*.oneTime()*/.extra())
})  

bot.hears('👍Sim', async ctx => {
    await ctx.reply(`O que deseja beber?`, tecladoBebidas)
})

bot.hears('👎Não', async ctx => {
    await ctx.reply(`Ok`)
})

bot.hears('🍻Cerveja', ctx => ctx.reply(`Não há ${ctx.match}`))
bot.hears('🙃Nada',
        ctx => ctx.reply('Está bem'))
bot.on('text', ctx=> ctx.reply('Porfavor, aguarde.'))

bot.startPolling()