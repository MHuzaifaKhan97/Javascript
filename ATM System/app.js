var userNames = ['huzaifa','waleed','abubakar','saad','usama'];
var passwords = ['1234','1235','1236','1237','1238'];
var amount = [10000,20000,30000,40000,50000];
var temp = false;
var remain = 0;
var newAmount = 0;
var iteration = 0;

var askName = prompt("Enter Your Name :");
var askPassword = prompt("Enter Your Password :");
askName = askName.toLowerCase();
askPassword = askPassword.toLowerCase();

for(var i=0;i<userNames.length;i++){

    if(askName === userNames[i] && askPassword === passwords[i])
    {
        temp = true;
        iteration = i;
        var username = document.getElementById('name');
        username.style.fontVariant = 'all-petite-caps';
        username.innerText += " "+askName;
    }
}

if(temp == false)
{
    alert("Invalid UserName and Password.!!");
}

function deposite()
{
    newAmount = prompt("Enter Amount which you want to deposite :");
    newAmount = Number(newAmount);
    newAmount = newAmount + amount[iteration];
    alert("old Amount : "+amount[iteration]+" Rs\nNew Amount : "+newAmount+" Rs");
}

function withdraw()
{
    var withdraw = prompt("Enter Amount which you want to withdraw :");
    withdraw = Number(withdraw);
    remain = amount[iteration] - withdraw;
    alert("Old Amount : "+amount[iteration]+" Rs\nAmount of withdrawl : "+withdraw+" Rs\nAmount after withdrawl : "+remain+" Rs");
}

function checkBalance()
{
    alert("Your current balance is : "+amount[iteration]+" Rs");
}


