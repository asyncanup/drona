var droneStream = require("dronestream"),
    http = require("http");

module.exports = function (app) {
    droneStream.listen(http.createServer(app));
};
