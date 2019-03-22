
var hour = document.getElementById('hour').innerText;
var min = document.getElementById('min').innerText;
var sec = document.getElementById('sec').innerText;

var hNum = Number(hour);
var mNum = Number(min);
var sNum = Number(sec);

var mainTimer = null;

function timerStart() {
    mainTimer = setInterval(timer, 1000);
}

function timerStop() {
     clearInterval(mainTimer);
}

function timerReset(){

    sNum=0;
    mNum=0;
    hNum=0;
    document.getElementById('sec').innerText = "00";
    document.getElementById('min').innerText = "00";
    document.getElementById('hour').innerText = "00";
    clearInterval(mainTimer);
}


function timer() {

    sNum++;
    console.log(sNum)
    document.getElementById('sec').innerText = "0" + sNum;

    if (sNum > 9) {
        document.getElementById('sec').innerText = sNum;
    }
    if (sNum > 59) {
        sNum = 0;
        mNum++;
        document.getElementById('min').innerText = "0" + mNum;
    }
    if (mNum > 9) {
        document.getElementById('min').innerText = mNum;

    }
    if (mNum > 59) {
        sNum=0;
        mNum=0;
        hNum++;
        document.getElementById('hour').innerText = "0" + hNum;
    }
    if (hNum > 9) {
        document.getElementById('hour').innerText = hNum;
    }
}