const { request } = require('express');
const express = require('express');
const app = express();
const WebSocket = require('ws');


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(require('./routes'))

app.use(require('./routes/albums'))

app.use(require('./routes/chat'))

app.use(require('./routes/api'))

const port = 3000;

const wss = new WebSocket.Server({noServer: true})

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        console.log(JSON.parse(data))
        wss.clients.forEach((client) => {
            // if (client !== ws && client.readyState === WebSocket.OPEN){
                console.log('sending data back')
                client.send(data)
            // }
        })
    })
})

const server = app.listen(port);
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, socket => {
        wss.emit('connection', socket, request);
    });
})