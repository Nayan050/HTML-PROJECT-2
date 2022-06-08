let miliseconds = 0
let seconds = 0
let minutes = 0
let hours = 0
let statusStopwatch = "stop"
let displayMiliSeconds = document.getElementById("milisec")
let displaySeconds = document.getElementById("sec")
let displayMinutes = document.getElementById("min")
let displayHours = document.getElementById("hour")
let displayStart = document.getElementById("start")
let displayReset = document.getElementById("reset")

let interv


function startStopwatch() {
    if (statusStopwatch == "stop") {
        interv = setInterval(start, 1000)
        displayStart.innerText = "Stop"
        statusStopwatch = "start"
        displayReset.style.display = "flex"
    } else {
        clearInterval(interv)
        displayStart.innerText = "Start"
        statusStopwatch = "stop"
    }
}

function start() {
    miliseconds++;
    if (miliseconds == 1000) {
        miliseconds = 0

        seconds++;
    }
    if (seconds == 60) {
        seconds = 0
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0
        hours++;
    }
    displayMiliSeconds.innerText = (miliseconds < 9) ? `0${miliseconds}` : miliseconds
    displaySeconds.innerText = (seconds < 9) ? `0${seconds}` : seconds
    displayMinutes.innerText = (minutes < 9) ? `0${minutes}` : minutes
    displayHours.innerText = (hours < 9) ? `0${hours}` : hours
}

function reset() {
    miliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0
    clearInterval(interv)
    statusStopwatch = "stop"
    displayStart.innerText = "Start"
    displayMiliSeconds.innerText = "00"
    displaySeconds.innerText = "00"
    displayMinutes.innerText = "00"
    displayHours.innerText = "00"
}
