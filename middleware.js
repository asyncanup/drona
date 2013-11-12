// Drone Middleware
var socketIO = require("socket.io-client"),
    drone = require("./drone-mock");

module.exports = function (app, mountPath) {
    var server = socketIO.connect("http://localhost:3000/drone");
    server.on("connect", function () {
        sendLog("Hello from Drona!");
        server.emit("identification", { type: "drone" });
    });

    server.on("authorized", function () {
        sendLog("Thanks for accepting Drona!");
    });

    server.on("action", function (data) {
        console.log(data);
        drone[data.call].apply(drone, data.args);
    });

    function sendLog(msg) {
        server.send(msg);
        app.log(">> " + msg);
    }
    server.on("message", function (msg) {
        app.log("    << " + msg);
    });
};