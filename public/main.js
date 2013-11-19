var socket = io.connect("http://localhost:3000/drone");

socket.on("connect", function () {
    socket.emit("identification", { type: "projector" });
});

socket.on("authorized", function () {
    sendLog("The projector has started.");
});

socket.on("navdata", function (navdata) {
    el(".navdata").innerText = navdata.demo.altitudeMeters;
});

socket.on("winner", function (player) {
    el(".winner").innerText = player + " has won this round!";
});

socket.on("stream video", startVideo);

function sendLog(msg) {
    socket.send(msg);
    console.log(">> " + msg);
}
socket.on("message", function (msg) {
    console.log("    << " + msg);
});


var startedStreaming;
function startVideo() {
    if (!startedStreaming) {
        new NodecopterStream(document.getElementById("png-stream"));
        startedStreaming = true;
    }
}

var el = document.querySelector.bind(document);