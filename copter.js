var arDrone = require("ar-drone"),
    c  = arDrone.createClient();

var nodemailer = require("nodemailer"),
    smtp = nodemailer.createTransport("SMTP", accountDetails());

var _this, startTime, stopTime;

module.exports = _this = {
    setup: function () {
        extend(global, this);
    },

    e: bound("disableEmergency"),

    t: function () {
        startTime = new Date().getTime();
        c.takeoff();
    },
    l: function () {
        stopTime = new Date().getTime();
        var mins = parseInt((stopTime - startTime) / 60000, 10) || 1;
        mail("That was a wonderful " + mins + "-minute flight!", "You reached great heights!", log);
        c.land();
    },
    s: bound("stop"),

    u: bound("up", 0.1),
    d: bound("down", 0.1),

    ff: bound("front", 0.1),
    bb: bound("back", 0.1),
    ll: bound("left", 0.1),
    rr: bound("right", 0.1),

    w: bound("animate", "wave", 4000),

    gl: bound("animate", "phiM30Deg", 1000),
    gr: bound("animate", "phi30Deg", 1000),
    gf: bound("animate", "thetaM30Deg", 1000),
    gb: bound("animate", "theta30Deg", 1000),
    
    d1: bound("animate", "phiDance", 4000),
    d2: bound("animate", "thetaDance", 4000),
    d3: bound("animate", "yawDance", 4000),

    d4: bound("animate", "phiThetaMixed", 4000),
    d5: bound("animate", "doublePhiThetaMixed", 4000),
    
    fa: bound("animate", "flipAhead", 1500),
    fb: bound("animate", "flipBehind", 1500),
    fl: bound("animate", "flipLeft", 1500),
    fr: bound("animate", "flipRight", 1500),

    data: function () {
        c.once("navdata", function (data) {
            console.log(data);
            //mail("Navigation Data Sample!", data, log);
        });
    },

    testMail: function () {
        mail("Test Mail", "Test Content", log);
    }
};

function bound(method, arg1, arg2) {
    if (arg2) {
        return c[method].bind(c, arg1, arg2);
    } else if (arg1) {
        return c[method].bind(c, arg1);
    } else {
        return c[method].bind(c);
    }
}

function extend(extendee, extender) {
    for (var prop in extender) {
        if (extender.hasOwnProperty(prop)) {
            extendee[prop] = extender[prop];
        }
    }
}

function mail(subject, data, callback) {
    smtp.sendMail({
        from: "Nodecopter AR Drone <node@copter.com>",
        to: "anupbishnoi@gmail.com",
        subject: subject,
        text: typeof data === "string" ? data : JSON.stringify(data, null, 4)
    }, callback);
}

function log(arg) {
    if (arg) { console.log(arg); }
}

function accountDetails() {
    return {
        service: "Gmail",
        auth: {
            user: "terriblyfake@gmail.com",
            pass: "goshhilarious"
        }
    };
}

