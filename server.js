var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3001);

app.get('/', function (req, res) {
  //res.sendFile(__dirname + '/index.html');
    res.send('Hello World!');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
  	console.log(data);
  });
  console.log('a connection has been established');
    
});