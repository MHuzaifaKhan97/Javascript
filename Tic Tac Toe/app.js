
var count;
var counter = 0;
var temp;
function pageLoad(){
swal("Enter X or Y For Player 1 ", {
    content: "input",
    closeOnClickOutside: false,
    closeOnEsc: false,
    })
.then((value) => {
        if(value.toUpperCase() !== "X" && value.toUpperCase()!=="Y")
        {
            swal({
                title : "Wrong Choice",
                text : "You can choose only \"X\" or \"Y\"",
                icon : "error",
                button : "Try Again",
            })
        
        .then(() => {
            location = "./index.html";
        });
    }else if(value == undefined || value == null || value == " " || value == ""){

        swal({
            title : "Enter Something",
            text : "Please Select \"X\" or \"Y\"",
            icon : "error",
            button : "Try Again",
        }).then(() =>{
            location = './index.html';
        })
    
    }
    
    else if(value == 'x' || value == 'X'){

        swal({
            title : "First Player Select X",
            text : "Second Player Has Y",
            icon : "success",
            button : "Start Game"
        });
        count = 0;
        return count;
    }else if(value =='y' || value == 'Y') 
    
        swal({
            title : "First Player Select Y",
            text : "Second Player Has X",
            icon : "success",
            button : "Start Game"
        });
    count = 1;
    return count;
    });
} 
    var main = document.getElementById('App');

var title = document.createElement('h1');
var titleText = document.createTextNode('TIC TAC TOE');
title.appendChild(titleText);
main.appendChild(title);

var turns = document.createElement('label');
var turnsText = document.createTextNode('TURN :');
turns.setAttribute('id','turns');
turns.appendChild(turnsText);

var turnValue = document.createElement('label');
turnValue.setAttribute('id','turn');

main.appendChild(turns);
main.appendChild(turnValue);

// var playAgain = document.createElement('button');
// playAgain.setAttribute('class','button');
// playAgain.setAttribute('onclick','refresh();')
// var playAgainText = document.createTextNode('PLAY AGAIN');
// playAgain.appendChild(playAgainText);
// main.appendChild(playAgain);

var table = document.createElement('table');

var tr1 = document.createElement('tr');
var tr2 = document.createElement('tr');
var tr3 = document.createElement('tr');


table.appendChild(tr1);
table.appendChild(tr2);
table.appendChild(tr3);
main.appendChild(table)

var box1 = document.createElement('td');
var box2 = document.createElement('td');
var box3 = document.createElement('td');
var box4 = document.createElement('td');
var box5 = document.createElement('td');
var box6 = document.createElement('td');
var box7 = document.createElement('td');
var box8 = document.createElement('td');
var box9 = document.createElement('td');

box1.setAttribute('class','box');
box2.setAttribute('class','box');
box3.setAttribute('class','box');
box4.setAttribute('class','box');
box5.setAttribute('class','box');
box6.setAttribute('class','box');
box7.setAttribute('class','box');
box8.setAttribute('class','box');
box9.setAttribute('class','box');


box1.setAttribute('id','box1');
box2.setAttribute('id','box2');
box3.setAttribute('id','box3');
box4.setAttribute('id','box4');
box5.setAttribute('id','box5');
box6.setAttribute('id','box6');
box7.setAttribute('id','box7');
box8.setAttribute('id','box8');
box9.setAttribute('id','box9');

box1.setAttribute('onclick','generate("box1")');
box2.setAttribute('onclick','generate("box2")');
box3.setAttribute('onclick','generate("box3")');
box4.setAttribute('onclick','generate("box4")');
box5.setAttribute('onclick','generate("box5")');
box6.setAttribute('onclick','generate("box6")');
box7.setAttribute('onclick','generate("box7")');
box8.setAttribute('onclick','generate("box8")');
box9.setAttribute('onclick','generate("box9")');

tr1.appendChild(box1);
tr1.appendChild(box2);
tr1.appendChild(box3);

tr2.appendChild(box4);
tr2.appendChild(box5);
tr2.appendChild(box6);

tr3.appendChild(box7);
tr3.appendChild(box8);
tr3.appendChild(box9);

var turn = "first";
document.getElementById('turn').innerText = "First";


function generate(id){
    
   var box = document.getElementById(id);
  
   box.removeAttribute('onclick','generate("'+id+'");');
   box.style.backgroundColor ="orange"
   if(turn ==='first' && count == 0)
   {
    var sign = document.createTextNode("X");  
    box.appendChild(sign);
    box.style.transition = "1s";
    turn = "second";
    counter++;    
    count = 1;
    document.getElementById('turn').innerText = "Second";
    var td = document.getElementsByTagName('td');
   }
   else if(turn === "first" && count == 1){
    var sign = document.createTextNode("Y");
    box.appendChild(sign);
    box.style.transition = "1s";
    turn = "second";
    count = 0;
    document.getElementById('turn').innerText = "Second";
    counter++;
   }
   else if(turn === "second" && count == 0){
    var sign = document.createTextNode("X");
    box.appendChild(sign);
    box.style.transition = "1s";
    turn = "first";
    document.getElementById('turn').innerText = "First";
    counter++;
    count = 1;
   }
   else if(turn === "second" && count == 1){
    var sign = document.createTextNode("Y");
    box.appendChild(sign);
    box.style.transition = "1s";
    turn = "first";
    document.getElementById('turn').innerText = "First";
    counter++;
    count = 0;
   }
   
   
   
   if((box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X") || (box4.innerText=="X" && box5.innerText=="X" && box6.innerText=="X") ||   (box7.innerText=="X" && box8.innerText=="X" && box9.innerText=="X") || 
   (box1.innerText=="X" && box4.innerText=="X" && box7.innerText=="X") || (box2.innerText=="X" && box5.innerText=="X" && box8.innerText=="X") || 
   (box3.innerText=="X" && box6.innerText=="X" && box9.innerText=="X") || (box1.innerText=="X" && box5.innerText=="X" && box9.innerText=="X") || (box3.innerText=="X" && box5.innerText=="X" && box7.innerText=="X") ){

    // document.getElementById('turns').innerText = "";
    // document.getElementById('turn').innerText = "Second Player Won The Game";
    temp = true;
    swal({
        title : "Congratulations !!",
        text : "X Won the Game!!!",
        icon : "success",
        button : "Play Again",
        closeModal : true
    }). then(() => {

        location = './index.html';
    });

}
   
   else if((box1.innerText=="Y" && box2.innerText=="Y" && box3.innerText=="Y") || (box4.innerText=="Y" && box5.innerText=="Y" && box6.innerText=="Y") ||   (box7.innerText=="Y" && box8.innerText=="Y" && box9.innerText=="Y") || 
   (box1.innerText=="Y" && box4.innerText=="Y" && box7.innerText=="Y") || (box2.innerText=="Y" && box5.innerText=="Y" && box8.innerText=="Y") || 
   (box3.innerText=="Y" && box6.innerText=="Y" && box9.innerText=="Y") || (box1.innerText=="Y" && box5.innerText=="Y" && box9.innerText=="Y") || (box3.innerText=="Y" && box5.innerText=="Y" && box7.innerText=="Y")){
    //    alert("First Player Won The Game");
    // document.getElementById('turns').innerText = "";
    // document.getElementById('turn').innerText = "First Player Won The Game";

    temp = true;
    swal({
        title : "Congratulations !!",
        text : "Y Won the Game!!!",
        icon : "success",
        button : "Play Again",
        closeModal : true
    }).then(() =>{
        location = './index.html'
    });
   }

//         if((box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X") || (box4.innerText=="X" && box5.innerText=="X" && box6.innerText=="X") ||   (box7.innerText=="X" && box8.innerText=="X" && box9.innerText=="X") || 
//    (box1.innerText=="X" && box4.innerText=="X" && box7.innerText=="X") || (box2.innerText=="X" && box5.innerText=="X" && box8.innerText=="X") || 
//    (box3.innerText=="X" && box6.innerText=="X" && box9.innerText=="X") || (box1.innerText=="X" && box5.innerText=="X" && box9.innerText=="X") || (box3.innerText=="X" && box5.innerText=="X" && box7.innerText=="X") ){

//     // document.getElementById('turns').innerText = "";
//     // document.getElementById('turn').innerText = "Second Player Won The Game";

//     swal({
//         title : "Congratulations !!",
//         text : "X Won the Game!!!",
//         icon : "success",
//         button : "Play Again",
//         closeModal : true
//     }). then(() => {

//         location = './index.html';
//     });

// }
   
//    else if((box1.innerText=="Y" && box2.innerText=="Y" && box3.innerText=="Y") || (box4.innerText=="Y" && box5.innerText=="Y" && box6.innerText=="Y") ||   (box7.innerText=="Y" && box8.innerText=="Y" && box9.innerText=="Y") || 
//    (box1.innerText=="Y" && box4.innerText=="Y" && box7.innerText=="Y") || (box2.innerText=="Y" && box5.innerText=="Y" && box8.innerText=="Y") || 
//    (box3.innerText=="Y" && box6.innerText=="Y" && box9.innerText=="Y") || (box1.innerText=="Y" && box5.innerText=="Y" && box9.innerText=="Y") || (box3.innerText=="Y" && box5.innerText=="Y" && box7.innerText=="Y")){
//     //    alert("First Player Won The Game");
//     // document.getElementById('turns').innerText = "";
//     // document.getElementById('turn').innerText = "First Player Won The Game";

//     swal({
//         title : "Congratulations !!",
//         text : "Y Won the Game!!!",
//         icon : "success",
//         button : "Play Again",
//         closeModal : true
//     }).then(() =>{
//         location = './index.html'
//     });
//    }

//   if(((box1.innerText!=="Y" && box2.innerText!=="Y" && box3.innerText!=="Y") || (box4.innerText!=="Y" && box5.innerText!=="Y" && box6.innerText!=="Y") ||   (box7.innerText!=="Y" && box8.innerText!=="Y" && box9.innerText!=="Y") || 
//    (box1.innerText!=="Y" && box4.innerText!=="Y" && box7.innerText!=="Y") || (box2.innerText!=="Y" && box5.innerText!=="Y" && box8.innerText!=="Y") || 
//    (box3.innerText!=="Y" && box6.innerText!=="Y" && box9.innerText!=="Y") || (box1.innerText!=="Y" && box5.innerText!=="Y" && box9.innerText!=="Y") || (box3.innerText!=="Y" && box5.innerText!=="Y" && box7.innerText!=="Y") ) &&
    
//     ((box1.innerText!=="X" && box2.innerText!=="X" && box3.innerText!=="X") || (box4.innerText!=="X" && box5.innerText!=="X" && box6.innerText!=="X") ||   (box7.innerText!=="X" && box8.innerText!=="X" && box9.innerText!=="X") || 
//    (box1.innerText!=="X" && box4.innerText!=="X" && box7.innerText!=="X") || (box2.innerText!=="X" && box5.innerText!=="X" && box8.innerText!=="X") || 
//    (box3.innerText!=="X" && box6.innerText!=="X" && box9.innerText!=="X") || (box1.innerText!=="X" && box5.innerText!=="X" && box9.innerText!=="X") || (box3.innerText!=="X" && box5.innerText!=="X" && box7.innerText!=="X")
//     )){
    if(counter>7)
    temp = false;

    if(temp==false){ 
   swal({
        title : "OPPS !!",
        text : "No One Won The Game!!!\nBoth Team Take 4 Chances\nNow Toss Will Decide Who will Won",
        icon : "info",
        button : "Toss",
        closeModal : true
    }).then(() =>{
        swal({
        text : "Player 1 Have a chance to make a choice of Head or Tail...\n",
        content: "input",
        closeOnClickOutside: false,
        closeOnEsc: false,
        }).then((value)=>{

                toss(value);
        
        });
    })
   }
   
}


// function refresh(){
   
//     var td = document.getElementsByTagName('td');
//     for(var i=0;i<td.length;i++)
//     {   
//         var id = "box"+(i+1);
//         td[i].setAttribute('onclick','generate("'+id+'");');
//         td[i].innerText = "";
//         td[i].style.backgroundColor = "purple";
//         document.getElementById('turns').innerText = "TURN :";
//         document.getElementById('turn').innerText = "First";
//         turn = "first";
//     }

// }

function toss(value){
    var arr = [];
    arr[1] = "head";
    arr[2] = "tail";
    var random = Math.ceil(Math.random()*2);
    // for(var i=0;i<arr.length;i++){
        if(value.toLowerCase() == arr[random])
        {
            swal({
                title : "Congratulations",
                text : "First Player Won the Game Now",
                icon : "success",
                button : "Play Again",
            }).then(()=>{
                location ="./index.html";
            });
        }else if(value.toLowerCase() != "head" && value.toLowerCase() != "tail"){
            swal({
                title : "Wrong Choice",
                text : "Please Select either Head or Tail",
                icon : "error",
                content : "input",
                closeOnClickOutside: false,
                closeOnEsc: false,
            }).then((value)=>{
                toss(value);
            });
        }else{
            swal({
                title : "Congratulations",
                text : "Second Player Won the Game Now",
                icon : "success",
                button : "Play Again",
            }).then(()=>{
                location = "index.html";
            })
        }
 }

