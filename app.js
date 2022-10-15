let finalDate = null;
let timerId = null;

function initTimer() {
    clearInterval(timerId);
    finalDate = document.getElementById("final-date-input").value;
    console.log(finalDate);

    if (finalDate == "") return;

    finalDate = new Date(finalDate);

    document.getElementById("msg").style.display = 'none';
    timer();
    timerId = setInterval(timer, 1000);
};

function timer() {
    const now = new Date().getTime();

    let timeLeft = Math.floor((finalDate.getTime() - now)/1000);

    if (timeLeft <= 0) {
        document.getElementById("msg").style.display = "block";
        clearInterval(timerId);
        clearTimer();
        return;
    }

    let days = Math.floor(timeLeft / (60*60*24));
    let hours = Math.floor((timeLeft % (60*60*24)) / (60*60));
    let minutes = Math.floor((timeLeft % (60*60)) / 60);
    let seconds = Math.floor(timeLeft % 60);

    setHtmlBySelector("#days", days);
    setHtmlBySelector("#hours", hours);
    setHtmlBySelector("#minutes", minutes);
    setHtmlBySelector("#seconds", seconds);
};

function setHtmlBySelector(selector, val) {
    document.querySelector(selector).innerHTML = val;
};

function clearTimer() {
    setHtmlBySelector("#days", "--");
    setHtmlBySelector("#hours", "--");
    setHtmlBySelector("#minutes", "--");
    setHtmlBySelector("#seconds", "--");
}

document.getElementById("countdown-btn").addEventListener('click', () => initTimer());
