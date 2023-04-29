const chalk = require('chalk')
const fs = require('fs')
global.donate = `
DANA : 085-904-284-057
PULSA AXIS : 083-838-057-050`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
