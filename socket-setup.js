var socket = require("./socket-client"),
    _ = require("underscore"),
    drone = require("./drone");

module.exports = function (app) {
    
    socket.on("connect", function () {
        sendLog("Hello from Drona!");
        socket.emit("identification", { type: "drone" });
    });

    socket.on("authorized", function () {
        sendLog("Thanks for accepting Drona!");
    });

    socket.on("action", function (data) {
        sendLog(data.call + "(" + _.toArray(data.args).join(", ") + ")");

        drone[data.call].apply(drone, (data.args || []));
    });

    drone.on("navdata", _.throttle(function (navdata) {
        socket.emit("navdata", navdata);
    }, 100));

    function sendLog(msg) {
        socket.send(msg);
        app.log(">> " + msg);
    }
    socket.on("message", function (msg) {
        app.log("    << " + msg);
    });
};