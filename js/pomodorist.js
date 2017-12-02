var bigTime = 1499
var mins;
var secs;
var countdownID;
var mode = "normal";
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var start = document.getElementById("start");
start.addEventListener("click", start, false);

var stop = document.getElementById("stop");
stop.addEventListener("click", stop, false);

var reset = document.getElementById("reset");
reset.addEventListener("click", reset, false);

function counter() {

    mins = Math.floor(bigTime / 60);
    secs = bigTime - mins * 60;
    minutes.innerHTML = (mins < 10 ? '0' : '') + mins;
    seconds.innerHTML = (secs < 10 ? '0' : '') + secs;

    if (bigTime == 0) {

        if (mode == "normal") {

            mode = "cooldown";
            bigTime = 300;

        } else if (mode == "cooldown") {

            mode = "normal";
            bigTime = 1499;

            minutes.innerHTML = "25";
            seconds.innerHTML = "00";

            document.body.style.background = "#" + color;

            clearInterval(countdownID);
        }

    } else {
        // decrement
        bigTime = bigTime - 1;
    }

}

function start() {
    countdownID = setInterval("counter()", 10);
}

function stop() {
    clearInterval(countdownID);
}

function restart() {
    bigTime = 1499;
}




//     mins = Math.floor(bigTime / 60);
//    secs = bigTime - mins * 60;
//    minutes.innerHTML = (mins < 10 ? '0' : '') + mins;
//    seconds.innerHTML = (secs < 10 ? '0' : '') + secs;
// transform the diff
//     var minutes = Math.floor((diffInSeconds % (60 * 60)) / 60) - 22;
//     var seconds = Math.floor(diffInSeconds % 60);
//     // display the diff
//    var placeholder = document.getElementById("countdownPlaceholder");
//    placeholder.innerHTML = "Time " + minutes + " m " + seconds + " s."
//
// check if we should stop counting
//   if (isNegative(diffInSeconds)) {
// stop repetition
//        clearInterval(intervalIdentifier);
// display appropriate message
//        placeholder.innerHTML = "Today is Vincent's birthday!"
//   }
//}
//
// setup start function to be execute once in a second
// var intervalIdentifier = setInterval(start, 1000);
//console.log(intervalIdentifier);


// function isNegative(num) {
//   if (isNaN(num)) {
//        return false;
//   }
//    return Math.min(num, 0) != 0;
//}