var app = require("apper")(__dirname);

app.init();
//app.start(process.env.PORT || 3001);

process.on("uncaughtException", function (error) {
    console.log(error.stack);
});
