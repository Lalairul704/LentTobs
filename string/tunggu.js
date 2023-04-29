const chalk = require('chalk')
const fs = require('fs')
global.tunggu = `Silahkan Tunggu Permintaan Mu sedang kami Proses !,`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
