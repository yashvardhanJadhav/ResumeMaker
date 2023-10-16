const connectToMongo = require('./db')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())
connectToMongo()

app.use(express.json())
app.use('/api/v1', require(path.join(__dirname, './routes/auth')))
app.use('/api/v1', require(path.join(__dirname, './routes/userCredentials')))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})