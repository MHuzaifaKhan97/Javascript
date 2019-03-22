var monArray = ['January','February','March','April','May','June','July','August','September','October','November','Ddecember'];
var dayArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function showTime()
{
    var date = new Date();
    var h = date.getHours(); // 0 - 23 
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
    h = 12;
    }   
    if(h > 12){
    h = h - 12;
    session = "PM";
    }
    if(h < 10){
    h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10 ) {
        s = "0" + s;
    }

    var time = h + ":" + m + ":" +s + " " + session;
    document.getElementById('myClock').innerText = time;
    document.getElementById('myClock').textContent = time;

    setTimeout(showTime,1);
}

showTime();

function showDate()
{
    
var date = new Date();
var day = date.getDay();
var dt = date.getDate();
var month = date.getMonth();
var years = date.getFullYear();

var fullDate = dayArray[day] +"\t"+ dt + "\\" + monArray[month] + "\\" + years ;
document.getElementById('date').innerText = fullDate;
document.getElementById('date').textContent = fullDate;
}
showDate();

// setInterval(showTime,1000); 