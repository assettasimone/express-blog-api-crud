const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Blog server listen at: http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send('server online')
})