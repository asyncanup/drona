DRONO
=====

## Requirements

* AR Drone
* NodeJS

## Install

* Download and unzip repository
* `npm install`

## Usage

* Connect internet via LAN cable, not wifi
* Start AR Drone
* Connect to AR Drone's wifi
* Open `node` repl
* `> require("./copter").setup()`
* Run commands from list mentioned below
* Land

## Command List

* `e`: Disable Emergency (turn the lights green if they're red)
* `t`: Take off
* `l`: Land. Landing sends an email with flight duration, if configured in `copter.js`
* `s`: Stop the current motion and hover

* `u`: Start rising up
* `d`: Start lowering to ground

* `ff`: Start moving to front
* `bb`: Start moving backwards
* `ll`: Start moving to left (strafe, not turn)
* `rr`: Start moving to right (strafe, not turn)

* `w`: Wave animation

* `gl`: Move swiftly to left and stop
* `gr`: Move swiftly to right and stop
* `gf`: Move swiftly forward and stop
* `gb`: Move swiftly backward and stop

* `fa`: Flip ahead (just lovely)
* `fb`: Flib Backward
* `fl`: Flip Left
* `fr`: Flip Right

* `yd`: Yaw Dance
* `pd`: Phi Dance
* `td`: Theta Dance

* `ptm`: Phi Theta mixed (it's nice)
* `dptm`: Double Phi Theta mixed

* `data`: Get mailed a copy of current navigation data (need to put your email in copter.js)
* `testMail`: Check if sending mail is even working

Tested in Mac OS.
