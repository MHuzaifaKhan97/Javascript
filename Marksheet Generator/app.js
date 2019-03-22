
function submitForm(){

var name = document.getElementById('name').value;
var rollNo = document.getElementById('rollNo').value;
var batch = document.getElementById('batch').value;
var course = document.getElementById('course').value;
var html1 = document.getElementById('html1').value;
html1 = parseInt(html1);
var css1 = document.getElementById('css1').value;
css1 = parseInt(css1)
var css2 = document.getElementById('css2').value;
css2 = parseInt(css2)
var js1 = document.getElementById('js1').value;
js1 = parseInt(js1)
var js2 = document.getElementById('js2').value;
js2 = parseInt(js2)
var js3 = document.getElementById('js3').value;
js3 = parseInt(js3)
var js4 = document.getElementById('js4').value;
js4 = parseInt(js4)
var js5 = document.getElementById('js5').value;
js5 = parseInt(js5)
var avgcss = 0;
avgcss = parseInt(avgcss);
var avgjs = 0;
avgjs = parseInt(avgjs)
var grade = "";
var percentage = 0;

   avgcss = (css1 + css2)/2;
   avgjs = (js1 + js2 + js3 + js4 + js5)/5;
   
   document.getElementById('tdname').innerHTML = name;
   document.getElementById('tdrollno').innerHTML = rollNo;
   document.getElementById('tdbatch').innerHTML = batch;
   document.getElementById('tdprogram').innerHTML = course;
   document.getElementById('avghtml').innerHTML = html1;
   document.getElementById('avgcss').innerHTML = avgcss;
   document.getElementById('avgjs').innerHTML = avgjs;

   percentage = (html1 + avgcss + avgjs )/3; 
   percentage = percentage.toFixed(2);
   document.getElementById('totPercentage').innerHTML = percentage+"%";

   if(percentage>80)
   {
       grade = "A+";
   }
   else if(percentage>70)
   {
       grade = "A";
   }
   else if(percentage > 60)
   {
       grade = "C"
   }
   else if(grade < 60)
   {
    grade = "F"
   }

   document.getElementById('grade').innerHTML = grade;
}