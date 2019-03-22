var counter = 1;
var count = 0;
function checkString() {

    
   
    var captialChar = '';
    var smallChar = '';
    var specialChar = '';
    var num = '';

    var str = document.getElementById('textField').value;
    console.log(str);
    if(str === '' || str === " " || str === undefined){
        alert('Please Enter Something');
    }
    else{

    for (var i = 0; i < 255; i++) {
        if (str.charAt(i) >= String.fromCharCode(65) && str.charAt(i) <= String.fromCharCode(90)) {
            captialChar = captialChar + str[i];
        }
        if (str.charAt(i) >= String.fromCharCode(48) && str.charAt(i) <= String.fromCharCode(57)) {
            num = num + str[i];
            num = parseInt(num);
        }
        if (str.charAt(i) >= String.fromCharCode(33) && str.charAt(i) <= String.fromCharCode(47)) {
            specialChar = specialChar + str[i];
        }
        if (str.charAt(i) >= String.fromCharCode(97) && str.charAt(i) <= String.fromCharCode(122)) {
            smallChar = smallChar + str[i];
        }
    }

    var dataFather = document.getElementById('data-father');

    var mainData = document.createElement('ul');
    mainData.setAttribute('class','mt-5 text-white');


    var btn = document.createElement('button');
    btn.setAttribute('class','btn btn-danger');
    btn.style.cssFloat = 'right'
    var btnText = document.createTextNode('X');
    btn.appendChild(btnText)

    mainData.appendChild(btn);

    btn.addEventListener('click',function(){
        document.getElementById('data-father').removeChild(mainData);
        count--;
    })

    var h1 = document.createElement('h1');
    h1.style.display ='inline-block'
    h1.setAttribute('class','text-warning mt-5 mb-5');
    var entry = "Entry No "+(counter);
    var h1Text = document.createTextNode(entry);

    h1.appendChild(h1Text);

    mainData.appendChild(h1);

    var CLli = document.createElement('li');
    captialChar = "Capital Alphabets : " + captialChar + " , Length(" + captialChar.length + ")";
    var CLliText = document.createTextNode(captialChar);
    CLli.appendChild(CLliText);
    mainData.appendChild(CLli);

    var SMli = document.createElement('li');
    smallChar = "Small Alphabets : " + smallChar + " , Length(" + smallChar.length + ")";
    var SMliText = document.createTextNode(smallChar);
    SMli.appendChild(SMliText);
    mainData.appendChild(SMli);

    var NMli = document.createElement('li');
    num = "Numbers : " + num + " , Length(" + num.toString().length + ")";
    var NMliText = document.createTextNode(num);
    NMli.appendChild(NMliText);
    mainData.appendChild(NMli);

    var SCli = document.createElement('li');
    specialChar = "Special Characters : " + specialChar + " , Length(" + specialChar.length + ")";
    var SCliText = document.createTextNode(specialChar);
    SCli.appendChild(SCliText);
    mainData.appendChild(SCli);


    dataFather.appendChild(mainData);

    document.getElementById('textField').value = "";
    
    if(count >=3){
        document.getElementById('data-father').innerText = "";
        counter = 1;
        count = 0;
        var hr = document.createElement('hr')
        dataFather.appendChild(hr);
        alert('Limit Exceed\nNow,Start Again')
    }
    counter++;
    count++;
}

    console.log(counter);

    console.log('Capital Letter : ', captialChar);
    console.log('Numbers :', num);
    console.log('Special Characters :', specialChar);
    console.log('Small Letter :', smallChar);
}
