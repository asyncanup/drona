var socketIO = require("socket.io-client");
module.exports = socketIO.connect(require("./config").socketServer + "/drone");
