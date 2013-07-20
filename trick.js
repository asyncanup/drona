var arDrone = require("ar-drone");
var client  = arDrone.createClient({
    //ip: "169.254.228.220"
});

//client.on("navdata", console.log);

var animations = [
	"phiM30Deg", "phi30Deg", "thetaM30Deg", "theta30Deg", "theta20degYaw200deg", // 4
	"theta20degYawM200deg", "turnaround", "turnaroundGodown", "yawShake", // 8
	"yawDance", "phiDance", "thetaDance", "vzDance", "wave", "phiThetaMixed", // 14
	"doublePhiThetaMixed", "flipAhead", "flipBehind", "flipLeft", "flipRight" // 19
];

client.takeoff(function () {
	var timeTaken = animateInOrder(animations.slice(0, 4));

    //var timeTaken = 0;

    this.after(timeTaken, function () {
        this.land();
    });
});

function animateInOrder(animArr) {
    var timeFromStart = 0;

    animArr.forEach(function (anim) {
        client.after(timeFromStart, function () {
            console.log("animation starting: " + anim);
            client.animate(anim, 2000);
        });
        timeFromStart += 2000;
    });

    return timeFromStart;
}

// killall udhcpd; iwconfig ath0 mode ad-hoc essid macbook; ifconfig ath0 169.254.228.220 netmask 255.255.255.0 up;
