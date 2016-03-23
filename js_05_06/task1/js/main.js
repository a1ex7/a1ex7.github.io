var timerElement = document.getElementById('timer');
var startButton = document.getElementById('start');
var resetButton = document.getElementById('reset');

var watch = new Stopwatch(timerElement);

startButton.addEventListener('click', function() {
    if (!watch.isOn) {
        startButton.textContent = 'Pause';
        startButton.classList.remove('btn-success');
        startButton.classList.add('btn-info'); 
        watch.start();
    } else {
        startButton.textContent = 'Start';
        startButton.classList.remove('btn-info');
        startButton.classList.add('btn-success');
        watch.pause();
    }
});
resetButton.addEventListener('click', function() {
    startButton.textContent = 'Start';
    startButton.classList.remove('btn-info');
    startButton.classList.add('btn-success');
    watch.stop();
});