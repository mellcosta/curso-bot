const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`Bom dia, ${from.first_name}!`)
})

bot.on('text', ctx =>
    ctx.reply(`Texto '${ctx.update.message.text}' recebido com sucesso`)
)

bot.on('location', ctx => {
    const location = ctx.update.message.location
    console.log(location)
    ctx.reply(`Entendido , estás em
        Lat: ${location.latitude},
        Lon: ${location.longitude}.`)
})

bot.on('contact', ctx => {
    const contact = ctx.update.message.contact
    console.log(contact)
    ctx.reply(`Vou lembrar de
        ${contact.first_name} (${contact.phone_number})`)
})

bot.on('voice', ctx => {
    const voice = ctx.update.message.voice
    console.log(voice)
    ctx.reply(`Os eu áudio tem ${voice.duration} segundos`)
})

bot.on('photo', ctx => {
    const photo = ctx.update.message.photo
    console.log(photo)
    photo.forEach( (ph, i) => {
         ctx.reply(`A photo ${i} tem resolução ${ph.width}x ${ph.height} `)
    }) 
})

bot.on('sticker', ctx => {
    const sticker = ctx.update.message.sticker
    console.log(sticker)
    ctx.reply(`Usaste o sticker ${sticker.emoji} do conjunto ${sticker.set_name}`)
})

bot.on('video', ctx => {
    const video = ctx.update.message.video
    console.log(video)
    ctx.reply(` O vídeo tem a duração de ${video.duration}s`)
})

bot.on('document', ctx => {
    const document = ctx.update.message.document
    console.log(document)
    ctx.reply(`O documento ${document.file_name} foi recebido com sucesso`)
})

bot.on('audio', ctx => {
    const audio = ctx.update.message.audio
    console.log(audio)
    ctx.reply(`A música ${audio.title} tem a duração de ${audio.duration} s
    É do tipo ${audio.mime_type} `)
})

bot.startPolling()