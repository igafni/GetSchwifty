
function Timer () {
    this.timerCounter;
    this.count = 0;

    this.start = function() {
        this.count=0;
        this.timerCounter = setInterval(function() {this.countUp()}.bind(this), 1000);

    }
    this.countUp = function() {
        document.querySelector('#GetSchwifty-puzzle .time-container').textContent = `Time: ${this.count++}`;
    }
    this.clearUp = function() {
        this.count=0;
        clearInterval(this.timerCounter);
        document.querySelector('#GetSchwifty-puzzle .time-container').textContent = `Time: ${this.count}`;
    }
}

export {Timer}