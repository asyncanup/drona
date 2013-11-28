var droneStream = require("dronestream"),
    http = require("http");

module.exports = function (app) {
    droneStream.listen(http.createServer(app).listen(process.env.PORT || 3001));
};
