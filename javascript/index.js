const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
    // ... your code goes here
    const minutes = chronometer.getMinutes()
    const seconds = chronometer.getSeconds()
        //const milliseconds = chronometer.getMilliseconds()

    chronometer.computeTwoDigitNumber()

    console.log("minutes", minutes)
    minUniElement.innerHTML = minutes

    console.log("seconds", seconds)
    secUniElement.innerHTML = seconds
    printSeconds()
        //console.log("milliseconds", milliseconds)
        //milUniElement.innerHTML = milliseconds
}

function printMinutes() {
    // ... your code goes here
    chronometer.getMinutes()

}

function printSeconds() {
    // ... your code goes here
    this.seconds = this.seconds > 9 ? this.seconds : "0" + this.seconds

}

// ==> BONUS
function printMilliseconds() {
    // ... your code goes here

}

function printSplit() {
    // ... your code goes here
}

function clearSplits() {
    // ... your code goes here
}

function setStopBtn() {
    // ... your code goes here
    btnLeftElement.innerHTML = "STOP"
    btnLeftElement.className = "btn stop"
}

function setSplitBtn() {
    // ... your code goes here
    btnRightElement.innerHTML = "SPLIT"
    btnRightElement.className = "btn split"

}

function setStartBtn() {
    // ... your code goes here
    btnLeftElement.innerHTML = "START"
    btnLeftElement.className = "btn start"

}

function setResetBtn() {
    // ... your code goes here
    btnRightElement.innerHTML = "RESET"
    btnRightElement.className = "btn reset"
        //this.intervalId = this.currentTime = 0
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
    //the next line is to check if the button is connected
    console.log('left button was clicked')
        //the next line is to switch the name after clicking
        //btnLeftElement.innerText === "STOP"
        //we need an if-else-Loop to switch to the original name
    if (btnLeftElement.innerText === "START") {
        setStopBtn()
        chronometer.start(printTime)
    } else {
        setStartBtn()
        chronometer.stop(printTime)
    }


    //console.log(chronometer.currentTime)
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    // ... your code goes here
    console.log('right button was clicked')
        //btnRightElement.innerText = 'RESET'
        //we need an if-else-Loop to switch to the original name
    if (btnRightElement.innerHTML === "RESET") {
        setSplitBtn()
        chronometer.reset()
    } else {
        setResetBtn()
        chronometer.split()
    }
});