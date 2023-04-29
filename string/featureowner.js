const chalk = require('chalk')
const fs = require('fs')
global.featureowner = `Mohon Maaf Mas Feature Hanya Bisa Di Gunakan Oleh Owner Bot Saja`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
