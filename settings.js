const fs = require('fs')
const chalk = require('chalk')
//==============================\
global.sapi = 'LentTobs-MD'
global.owner = ['17042814779']
global.ownernomer = "17042814779"
//===============================\\
global.wms = '17042814779'
global.packname = 'LENTTOBS-MD'
global.ownerlen = "MasLent/LentTobs"
global.ownername = "LentTobs"
global.footer = 'LentTobs-MD'
global.ytname = "YT : Pak Zainal Dev's"
global.socialm = "TT : @h4g0z0x"
global.location = "Indonesia, Bali, Denpasar"
global.premium = ['6262626262'] 
global.nomorcs = '626262626'
global.botname = 'LentTobs-MD' 
global.linkz = "https://chat.whatsapp.com/I7HTd6cuQBBD57iy6IWqYx"
global.websitex = "hagozox.repl.co"
global.themeemoji = "😿"
global.packname = "Sticker By"
global.author = "Made by LentTobs-MD"
global.wm = "LENTTOBS-MD"
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.mess = {
    premime: 'Premium Special Features If You Want to Register Type Rent',
    bot: 'This feature could be used by bot only',
    linkm: 'Where is the link?',
}
global.thum = fs.readFileSync("./gambar/maslent.jpg")
global.log0 = fs.readFileSync("./gambar/maslent.jpg")
global.err4r = fs.readFileSync("./gambar/maslent.jpg")
global.thumb = fs.readFileSync("./gambar/maslent.jpg")
global.limitawal = { //limit ges
    premium: "UNLIMITED",
    free: 50
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
