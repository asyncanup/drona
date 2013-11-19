var socketIO = require("socket.io-client");
module.exports = socketIO.connect("http://localhost:3000/drone");
