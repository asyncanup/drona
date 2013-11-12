var http = require("http"),
    drone = require("dronestream");


var server = http.createServer(function(req, res) {
  require("fs").createReadStream(__dirname + "/drone-stream.html").pipe(res);
});

drone.listen(server);
server.listen(5555);