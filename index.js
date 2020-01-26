const express = require('express');
const app = express();
const logger = require('morgan');
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(logger("dev"));

app.use(express.static('public'));

io.on('connection', function(socket) {
    console.info('New client connected 👥 ✅ 🔌');
    socket.emit('message','🤖: Welcome!')
});

setInterval(function(){
    io.emit('message', '🤖: Hi, I am writing to everybody')
}, 3000)

server.listen(8080, function() {
    console.info("Express was init successfully. ✅🚀");
})