const express = require('express')
const data = require('../MOCK_DATA.json')
const getUsers = require('./getUsers')
const getUser = require('./getUser')

const app = express()

app.get('/api/users', getUsers)
app.get('/api/user/:id', getUser)

const port = 5001
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

