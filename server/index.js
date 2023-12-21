const express = require('express')
const path = require('path');

const controller = require('./controller.js');

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile('static/index.html', {root: __dirname});
})

app.get('/api/houses', controller.getHouses)

app.post('/api/houses', controller.createHouse)

app.delete('/api/houses/:id', controller.deleteHouse)

app.listen(4000, () => console.log(`Server running on port 4000`))