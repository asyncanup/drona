var socketSetup = require("./socket-setup"),
    pngStreamSetup = require("./png-stream");

module.exports = function (app, mountPath) {

    socketSetup(app);
    pngStreamSetup(app);

};
