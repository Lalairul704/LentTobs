const chalk = require('chalk')
const fs = require('fs')
global.buypremium = `Harga Premium LentTobs

3 Hari : 1K
7 Hari : 2K
15 Hari : 3K


Payment / Pembayaran

DANA : 085-904-284-057

PULSA AXIS : 083-838-057-050

Benefit?
unli Limit
bebas akses Feature prem
`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
