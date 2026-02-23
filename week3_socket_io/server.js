// dependencies : npm install express socket.io nodemon
// to run the app : npx nodemon server.js

const express = require('express')
const path = require('path');

const SERVER_PORT = process.env.PORT || 3000
const app = express()

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/client.html'))
})

//start listening to server on PORT
const appServer = app.listen(SERVER_PORT, () => {
    console.log(`Server running on http://localhost:${SERVER_PORT}/`)
})
