var main = document.getElementById('App');

var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Welcome to Mini Game');
h1.setAttribute('class','h1');


var table = document.createElement('table');


var box1 = document.createElement("td");
box1.setAttribute("id", "box1");
box1.setAttribute("class", "box");
box1.setAttribute("onCLick", "generate('box1')")
var box2 = document.createElement("td");
box2.setAttribute("id", "box2");
box2.setAttribute("class", "box");
box2.setAttribute("onCLick", "generate('box2')")
var box3 = document.createElement("td");
box3.setAttribute("id", "box3");
box3.setAttribute("class", "box");
box3.setAttribute("onCLick", "generate('box3')")
var box4 = document.createElement("td");
box4.setAttribute("id", "box4");
box4.setAttribute("class", "box");
box4.setAttribute("onCLick", "generate('box4')")
var box5 = document.createElement("td");
box5.setAttribute("id", "box5");
box5.setAttribute("class", "box");
box5.setAttribute("onCLick", "generate('box5')")
var box6 = document.createElement("td");
box6.setAttribute("id", "box6");
box6.setAttribute("class", "box");
box6.setAttribute("onCLick", "generate('box6')")
var box7 = document.createElement("td");
box7.setAttribute("id", "box7");
box7.setAttribute("class", "box");
box7.setAttribute("onCLick", "generate('box7')")
var box8 = document.createElement("td");
box8.setAttribute("id", "box8");
box8.setAttribute("class", "box");
box8.setAttribute("onCLick", "generate('box8')")
var box9 = document.createElement("td");
box9.setAttribute("id", "box9");
box9.setAttribute("class", "box");
box9.setAttribute("onCLick", "generate('box9')")

var tr1 = document.createElement('tr');
tr1.setAttribute('id','tr1');

var tr2 = document.createElement('tr');
tr2.setAttribute('id','tr2');

var tr3 = document.createElement('tr');
tr3.setAttribute('id','tr3');


tr1.appendChild(box1);
tr1.appendChild(box2);
tr1.appendChild(box3);

tr2.appendChild(box4);
tr2.appendChild(box5);
tr2.appendChild(box6);

tr3.appendChild(box7);
tr3.appendChild(box8);
tr3.appendChild(box9);


table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)




main.appendChild(h1);
main.appendChild(table);

var arr = [];
var counter = 0;
var condition = false;
function generate(id){
    
    var getId = document.getElementById(id);
    getId.style.backgroundColor = "orange";
    getId.removeAttribute('onclick');

    var random = Math.ceil(Math.random()*10);
    var textNode = document.createTextNode(random);
    getId.appendChild(textNode);
    arr.push(getId.innerText)
    counter++;
    var td = document.getElementsByTagName('td');
                
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            for(var k=0;k<arr.length;k++)
            {
                if( (i!=j && j!= k && k!=i) && (arr[i] == arr[j] && arr[i] == arr[k] && arr[j] == arr[k])){
                var temp;
                temp= arr[j];    
                condition = true;
                console.log(temp);
                window.alert("Congratulations\nYou Won");
                
                for(var i=0;i<td.length;i++)
                {
                    document.getElementsByTagName('td')[i].removeAttribute('onclick','generate();');
                    if(temp === td[i].innerText)
                    {
                    td[i].style.backgroundColor = "green";
                    }
                }
                break;    
                
                }
            }
        }
    }
    if(condition === true)
    {
        var btn = document.createElement('button');
        var btnText = document.createTextNode("Play Again");
        btn.appendChild(btnText);
        btn.setAttribute('onclick','playAgain();');
        btn.setAttribute('class','btn');
        // main.appendChild(btn);
        var firstChild = main.firstChild;
        main.insertBefore(btn,firstChild)
    }
    if(counter > 8 && condition==false){  
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            for(var k=0;k<arr.length;k++)
            {
              
                if( (i!=j && j!= k && k!=i) && (arr[i] != arr[j] && arr[i] != arr[k] && arr[j] != arr[k])){
                    
               var conf =  window.confirm("Sorry\nYou Lost\nTry Again");
               if(conf)
               {
                   for(var i=0;i<td.length;i++)
                   {
                       var id = "box"+(i+1);
                        td[i].setAttribute('onclick','generate("'+id+'");');
                        td[i].style.backgroundColor = "rgb(12, 134, 247)";
                        td[i].innerText="";
                        arr = [];
                        counter = 0;    
                        temp = 0;
                        condition = false;
                           
                    }
                }
              }
            }
        
            break;
        }
    } 
  } 
}
function playAgain(){
    
    var td = document.getElementsByTagName('td');
    for(var i=0;i<td.length;i++)
    {
        var id = "box"+(i+1);
         td[i].setAttribute('onclick','generate("'+id+'");');
         td[i].style.backgroundColor = "rgb(12, 134, 247)";
         td[i].innerText="";
         arr = [];
         counter = 0;    
         temp = 0;
         condition = false;
     }
     document.getElementsByTagName('button')[0].style.display = "none";
}