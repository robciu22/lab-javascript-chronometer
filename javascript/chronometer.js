class Chronometer {
    constructor() {
        // ... your code goes here
        this.currentTime = 0
        this.intervalId = null
    }

    start(callback) {
        // ... your code goes here
        this.intervalId = setInterval(() => {
            this.currentTime += 1
                //console.log(this.currentTime)
            if (callback)
                callback()
        }, 1000)
    }

    getMinutes() {
        // ... your code goes here
        return Math.floor(this.currentTime / 60)
    }

    getSeconds() {
        // ... your code goes here
        return Math.floor(this.currentTime % 60)
    }

    computeTwoDigitNumber(value) {
        // ... your code goes here
        /*if (String(value).length === 1) {
            return `0${value}`
        } else {
            return String(value)
        }*/
        return ("0" + value).slice(-2)
    }

    stop(callback) {
        // ... your code goes here
        /*this.intervalId = clearInterval(() => {
            this.currentTime
        })*/
        clearInterval(this.intervalId)
    }

    reset() {
        // ... your code goes here
        this.intervalId = this.currentTime = 0
            //.innerHTML

    }

    split() {
        // ... your code goes here
        //this.intervalId.split('')
        let minutes = this.computeTwoDigitNumber(this.getMinutes())
        let seconds = this.computeTwoDigitNumber(this.getSeconds())
        return (`${minutes}:${seconds}`)
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = Chronometer;
}