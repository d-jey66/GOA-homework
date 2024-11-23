const express = require('express')
const app = express()
const port = 5911

const people = [
    { id: 1, name: 'john' },
    { id: 2, name: 'peter' },
    { id: 3, name: 'susan' }
]

app.get('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        res.status(404).send('Person not found')
    }
    res.json(person)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})