const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
app.get('/', (req, res) => {
  res.send('Have Fun Using KlomboFN!')
})

app.listen(port, () => {
  console.log(`KlomboFN started listening on port ${port}`)

try {
		global.BotConfig = JSON.parse(fs.readFileSync('.managers', 'utf8', function (err, data) {
			if (err) global.BotConfig = false;
		}))
	}
	catch {
		global.BotConfig = false
	}
})