///////////////////////////////////////////////////////////////
var express = require('express');
var app = express();
// var cors = require('cors')//jan7-2024
// var http = require('http')

var server = app.listen(3000);
// var server = http.createServer(app);
// server.listen(3000,"0.0.0.0",()=>{console.log(server.address().address + " port")})

// app.use(cors()) //jan7-2024

app.use(express.static('public'));
app.use(express.json())
app.post('/responder', (req, res) => {
    console.log('Got body:', req.body);
    // responder.process1(req.body,res)
    // res.sendStatus(200);
})
console.log("server is opened: "+Date.now())
// console.log(perSeed.noise2D(0.2,0,0))
// console.log("seeds: " + JSON.stringify(perSeeds))

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection)

function newConnection(socket){
	// socket.on('requestMap', sendMap)
	socket.on("uh idk man",(e)=>{console.log(e,socket)})
}
