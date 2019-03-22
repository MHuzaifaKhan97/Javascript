
    var Num = Math.ceil(Math.random()*100);
    var counter = 0;

function guessNumber()
{
    var temp = false;
    var inp = document.getElementById('inp').value;
    
    if(inp >100 || inp<0)
    {
      var neew = document.createElement('li');
      var newww = document.createTextNode("Invalid Number Please Choose number between 1 and 100");
      neew.appendChild(newww);
      document.getElementById('check').appendChild(neew);
    }
    else if(inp > Num)
    {
        var neew = document.createElement('li');
        var newww = document.createTextNode("Input Number is Higher");
        neew.appendChild(newww);
        document.getElementById('check').appendChild(neew);
        counter=counter+1;      
    }
    else if(inp < Num){
        var neew = document.createElement('li');
        var newww = document.createTextNode("Input Number is Lesser");
        neew.appendChild(newww);
        document.getElementById('check').appendChild(neew);
        counter=counter+1;
    }
    if(inp == Num)
    {
        temp = true;
        var neew = document.createElement('li');
        var newww = document.createTextNode("Correct Answer");
        var neew2 = document.createElement('li');
        var newww2 = document.createTextNode("No Of Try = "+counter);
        neew2.appendChild(newww2);
        neew.appendChild(newww);
        document.getElementById('check').appendChild(neew);
        document.getElementById('check').appendChild(neew2);
    }

    document.getElementById('inp').value = "";
}

// var item = document.getElementById('textBox').value;
// var text = document.createTextNode(item);
// var newItem = document.createElement('li')
// newItem.appendChild(text)
// document.getElementById('todoList').appendChild(newItem)