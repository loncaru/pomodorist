var bigTime = 1500;
var mins;
var secs;
var countdownID;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var starter = document.getElementById("btnStart");
starter.addEventListener("click", start, false);

var stop1 = document.getElementById("btnStop");
stop1.addEventListener("click", stop, false);

var reset = document.getElementById("btnRestart");
reset.addEventListener("click", resetart, false);

function counter() {
    bigTime--;
    console.log(bigTime)
    mins = Math.floor(bigTime / 60);
    secs = bigTime - mins * 60;
    minutes.innerHTML = (mins < 10 ? '0' : '') + mins;
    seconds.innerHTML = (secs < 10 ? '0' : '') + secs;

    if (bigTime == 0) {
        stop();
    }
}

function start() {
    clearInterval(countdownID);
    countdownID = setInterval(counter, 1000);
}

function pausa() {
    clearInterval(countdownID);

}

function stop() {
    clearInterval(countdownID);
    bigTime = 1500;
    var mins = Math.floor(bigTime / 60);
    var secs = bigTime - mins * 60;
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");
    minutes.innerHTML = mins;
    seconds.innerHTML = "0" + secs;

}

function
continue () {


}
console.log("script loaded ...")

//clearInterval(countdownID);
//countdownID = setInterval(counter, 1000);