let seconds = 0;

const intervalId = setInterval(function() {
    seconds += 1;
    console.log(seconds + " წამი");

    if (seconds >= 60) {
        clearInterval(intervalId);
        console.log("minute passed");
    }
}, 1000);
