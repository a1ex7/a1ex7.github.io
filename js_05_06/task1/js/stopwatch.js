function Stopwatch(timerElement) {

    var startTime = 0;
    var timerValue = 0;
    var interval;

    var self = this;

    function updateTimer() {
        if (self.isOn) {
            var offset = Date.now() - startTime;
            startTime += offset;
            timerValue += offset; 
        } else {
            timerValue = 0;
        }
        
        timerElement.innerHTML = timeFormat(timerValue); 
    };

    function timeFormat(timerValue) {
        var time = new Date(timerValue);
        var hours = time.getUTCHours()
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var milliseconds = time.getMilliseconds();

        if (minutes < 10) {
            minutes = '0' + minutes
        }

        if (seconds < 10) {
            seconds = '0' + seconds
        }

        if (milliseconds < 100) {
            milliseconds = '0' + milliseconds
        }

        if (milliseconds < 10) {
            milliseconds = '0' + milliseconds
        }

        var timeString = hours + ':' + minutes + ':' + seconds + '<span class="small">.' + milliseconds + '</span>'; 

        return timeString;
    }

    this.isOn = false;

    this.start = function() {
        self.isOn = true;
        startTime = Date.now();
        interval = setInterval(updateTimer, 63);
    };
    this.pause = function() {
        self.isOn = false;
        clearInterval(interval);
    };
    this.stop = function() {
        self.isOn = false;
        clearInterval(interval);
        updateTimer();
    };
}