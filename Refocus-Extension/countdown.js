document.addEventListener('DOMContentLoaded', function () {
    const bg = chrome.extension.getBackgroundPage()

    if (!bg.studyTimer.expired()) {
        bg.studyTimer.onTick(format)
        document.getElementById("phase").textContent = "Study"
    } else if (!bg.breakTimer.expired()) {
        bg.breakTimer.onTick(format)
        document.getElementById("phase").textContent = "Break"
    }

    function format(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("countdown").textContent = minutes + ':' + seconds;
    }
}, false)