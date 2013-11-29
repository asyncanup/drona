var socket = io.connect((window.socketServer || "") + "/drone");

socket.on("connect", function () {
    socket.emit("identification", { type: "projector" });
});

socket.on("authorized", function () {
    sendLog("The projector has started.");
});

socket.on("navdata", function (navdata) {
    $(".navdata").text(navdata && navdata.demo && navdata.demo.altitudeMeters);
});

socket.on("winner", function (player) {
    $(".winner").text(player + " has won this round!");
});

socket.on("action", function (action) {
    console.log(action);
});

function sendLog(msg) {
    socket.send(msg);
    console.log(">> " + msg);
}
socket.on("message", function (msg) {
    console.log("    << " + msg);
});


var startedStreaming;
function startVideo() {
    sendLog("Starting to stream video!");
    if (!startedStreaming) {
        new NodecopterStream($(".png-stream")[0]);
        startedStreaming = true;
    }
}
startVideo();