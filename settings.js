const fs = require('fs')
const chalk = require('chalk')
//==============================\
global.sapi = 'WA MD'
global.ownernomer = "6285791762177"
//===============================\\
global.wms = '6285791762177'
global.packname = 'LENTTOBS WA MD'
global.ownerlen = "Maslent/Lenttobs"
global.ownername = "WA MD"
global.footer = 'lenttobs'
global.ytname = "YT: lenttobs"
global.socialm = "IG: vlntncptr"
global.location = "Indonesia, Jawatimur, Lumajang"
global.premium = ['6262626262'] 
global.nomorcs = '626262626'
global.botname = 'Bot V24' 
global.linkz = "Link Gc"
global.websitex = "yt mu"
global.themeemoji = "😿"
global.packname = "Sticker By"
global.author = "Made by Lenttobs"
global.wm = "LENTTOBS WHATSAAP MD"
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
