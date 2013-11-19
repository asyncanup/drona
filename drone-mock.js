var EventEmitter = require("events").EventEmitter;

var drone = {};
EventEmitter.call(drone);
drone.__proto__ = EventEmitter.prototype;

var commands = [
    "takeoff",
    "land",
    "animate",
    "disableEmergency"
];
commands.forEach(function (command) {
    drone[command] = function () {
        //console.log(command + "(" + toArray(arguments).join(", ") + ")");
    };
});

var altitude = 1;
setInterval(function () {
    drone.emit("navdata", { demo: { altitudeMeters: (altitude++)%10 } });
}, 20);


function toArray(arrayLike) {
    return [].slice.call(arrayLike);
}

module.exports = drone;
