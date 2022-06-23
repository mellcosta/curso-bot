 const env = require('../.env')
 const Telegraf = require('telegraf')
 const bot = new Telegraf(env.token)

 bot.start( async ctx => {

 //text
    await ctx.reply(`Olá ${ctx.update.message.from.first_name}🌈🦄`)

//HTML
    await ctx.replyWithHTML(`Destacando mensagens <strong>HTML</strong>
        com <i>muitos</i> <code>exemplos</code> <pre>para praticar</pre>
        clique em <a href="https://www.google.com">GOOGLE</a> `
    )

//Markdown
    await ctx.replyWithMarkdown('Destacando mensagens *Markdown*' 
        + 'com _muitos_ `exemplos` ```para praticar```' 
        + 'clique em [GOOGLE] (https://www.google.com)' 
    )
    
//Photo
    await ctx.replyWithPhoto({source: `${__dirname}/unicorn.jpg`})
    await ctx.replyWithPhoto('https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdna.artstation.com%2Fp%2Fassets%2Fimages%2Fimages%2F013%2F551%2F820%2Flarge%2Fsarah-richter-unicorn-logo.jpg%3F1540139103&imgrefurl=https%3A%2F%2Fwww.artstation.com%2Fartwork%2F588P1O&tbnid=vEUfLoEY2Ob7lM&vet=12ahUKEwiMhdmEuZn4AhXEGd8KHb3WD98QMygoegUIARChAg..i&docid=6OXkUd--PzftPM&w=615&h=870&q=unicorn%20in%20the%20dark&ved=2ahUKEwiMhdmEuZn4AhXEGd8KHb3WD98QMygoegUIARChAg',
            { caption:'In the dark'})
/*
  await ctx.replyWithPhoto({ url: 'https://files.cod3r.com.br/curso-bot/gato1.jpg'})
    
//Location
    await ctx.replyWithLocation(35.41, 139.46)
*/
//Video
    await ctx.replyWithVideo('https://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
 })

 bot.startPolling()
