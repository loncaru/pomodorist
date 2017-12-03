var defaultTime = 1500;
var mins;
var secs;
var countdownID;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var audioC = document.getElementById("songC");
var audioF = document.getElementById("songF");

var starter = document.getElementById("btnStart");
starter.addEventListener("click", start, false);

var stop1 = document.getElementById("btnStop");
stop1.addEventListener("click", stop, false);


function counter() {
    defaultTime--;
    console.log(defaultTime)
    mins = Math.floor(defaultTime / 60);
    secs = defaultTime - mins * 60;
    minutes.innerHTML = (mins < 10 ? '0' : '') + mins;
    seconds.innerHTML = (secs < 10 ? '0' : '') + secs;

    if (defaultTime == 0) {
        audioF.play();
        end();

    }

    if (defaultTime <= 30 && defaultTime > 10 && defaultTime % 2 == 0) {
        document.getElementById("timer").style.color = "orange";


    } else if (defaultTime <= 10 && defaultTime % 2 == 0) {
        audioC.play();
        document.getElementById("timer").style.color = "#F00";
    } else {
        document.getElementById("timer").style.color = "#FFF";
    }
}

function start() {
    if (defaultTime == 0) {
        defaultTime = 1500;
        start()

    } else {
        clearInterval(countdownID);
        countdownID = setInterval(counter, 1000);
        audioC.pause();
        audioF.pause();
    }
}


function pausa() {
    clearInterval(countdownID);
    audioC.pause();

}

function stop() {
    clearInterval(countdownID);
    defaultTime = 1500;
    document.getElementById("timer").style.color = "#FFF"; //bug was present if we stop counter when he was red
    var mins = Math.floor(defaultTime / 60);
    var secs = defaultTime - mins * 60;
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");
    minutes.innerHTML = mins;
    seconds.innerHTML = "0" + secs;
    audioC.pause();
    audioF.pause();
}

function end() {
    clearInterval(countdownID);
    audioC.pause();
}
console.log("script loaded ...")