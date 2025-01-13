const express = require('express')
const app = express()

app.get('/user', (req, res) => {
    res.send('Here are the users!')
})

app.get('/filmData', (req, res) => {
    res.send('Here are the films!')
})

app.get('/currentUser', (req, res) => {
    res.send('This is the current user!')
})

app.get('/groupData', (req, res) => {
    res.send('Here are the groups!')
})

app.get('/familyData', (req, res) => {
    res.send('Here is the family data!')
})

app.listen(3000, () => {
    console.log(`Server is running on https://localhost:3000`)
})