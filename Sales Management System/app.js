function adminLogin() {

    var email = document.getElementById('adminEmail').value;
    var password = document.getElementById('adminPassword').value;

    if (email === "" || email === " " || email === undefined || password === "" || password === " " || password === undefined) {
        swal({
            title: "Login Failed",
            text: "Please fill the field",
            icon: "warning",
            button: "OK",
        })
    } else if (email === "Huzaifanadir1997@gmail.com" && password === "Huzaifa1234") {

        swal({
            title: "Login Successfull",
            text: "Welcome",
            icon: "success",
            button: "OK",
        }).then((value) => {
            location = "./admin.html"
        });
    } else {
        swal({
            title: "Login Failed",
            text: "email or password is inccorect",
            button: "OK",
        })
    }
}

function signUp() {

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var cpassword = document.getElementById('cpass').value;
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;
    var term = document.getElementById('terms').checked;

    if (fname === "" || fname === " " || fname === undefined ||
        lname === "" || lname === " " || lname === undefined) {
        swal({
            title: "SignUp Failed",
            text: "Fill the first Name or Last Name",
            button: "OK",
        });
    }
    else if (fname.length < 3) {
        swal({
            title: "SignUp Failed",
            text: "First Name must be greater then 3 character",
            button: "OK",
        })
    }
    else if (email === "" || email === " " || email === undefined) {
        swal({
            title: "SignUp Failed",
            text: "Please fill the email field",
            button: "OK",
        });
    }
    else if (password === "" || password === " " || password === undefined || cpassword === "" || cpassword === " " || cpassword === undefined) {
        swal({
            title: "SignUp Failed",
            text: "Please fill password",
            button: "OK",
        });
    }
    else if (password !== cpassword) {
        swal({
            title: "SignUp Failed",
            text: "Password Doesn't match",
            button: "OK",
        });
    }
    else if (dob === "") {
        swal({
            title: "SignUp Failed",
            text: "Please select Date of Birth",
            button: "OK",
        });
    } else if (term === false) {
        swal({
            title: "SignUp Failed",
            text: "Please mark checked the term and conditions",
            button: "OK",
        });
    }
    else {
        if (email != "") {
            if (email.indexOf("@") < 1) {
                swal({
                    title: "SignUp Failed",
                    text: "Email is Invalid",
                    button: "OK",
                });
            }
            else {
                var newUser = {
                    fname: fname,
                    lname: lname,
                    email: email,
                    password: password,
                    gender: gender,
                    dob: dob,
                }
                localStorage.setItem("user_info", JSON.stringify(newUser));
                swal({
                    title: "SignUp Successful",
                    icon: "success",
                    button: "OK",
                }).then((value) => {
                    location = "./index.html";
                });
            }
        }

    }
}
function userLogin() {
    var email = document.getElementById('userEmail').value;
    var password = document.getElementById('userPassword').value;
    var loginData = localStorage.getItem('user_info');
    var data = JSON.parse(loginData);


    if (email === "" || email === " " || email === undefined || password === "" || password === " " || password === undefined) {
        swal({
            title: "Login Failed",
            text: "Please fill the field",
            icon: "warning",
            button: "OK",
        })
    } else if (email === data.email && password === data.password) {
        swal({
            title: "Login Successfull",
            text: "Welcome",
            icon: "success",
            button: "OK",
        }).then((value) => {
            location = "./user.html";

        });
    } else {
        swal({
            title: "Login Failed",
            text: "email or password is inccorect",
            button: "OK",
        })
    }
}


var Name = document.getElementById('name');
var loginInfo = localStorage.getItem('user_info');
var data = JSON.parse(loginInfo)
var txt = document.createTextNode(data.fname + " " + data.lname);
Name.appendChild(txt);

var Name2 = document.getElementById('name2');
var txt2 = document.createTextNode(data.fname + " " + data.lname);
Name2.appendChild(txt2);





function addProduct() {

    var pName = document.getElementById('pName').value;
    var pPrice = document.getElementById('pPrice').value;
    var pRam = document.getElementById('pRam').value;
    var pStorage = document.getElementById('pStorage').value;
    var pCamera = document.getElementById('pCamera').value;
    var pCpu = document.getElementById('pCpu').value;
    var pImg = document.getElementById('pImg').value;

    var mainDiv = document.getElementById('AdminProducts');



    var panel = document.createElement("div");
    panel.setAttribute("class", "panel panel-success col-md-3");
  
    var panHead = document.createElement("div");
    panHead.setAttribute("class", "panel-heading text-center");

    var panHeadText = document.createTextNode(pName);
    panHead.appendChild(panHeadText);

    panel.appendChild(panHead);

    var panBody = document.createElement("div");
    panBody.setAttribute("class", "panel-body");
    var img = document.createElement("img");
    img.setAttribute("class", "thumbnail");
    img.setAttribute("class", "col-md-12");
    img.setAttribute("id", "addedImage");
    img.src = "./Images/s4.jpg";
    panBody.appendChild(img);
    var panBodyText = document.createTextNode("Price: " + pPrice + " " + "Ram" + pRam + "\n" + pStorage + " " + pCamera + "\n" + pCpu);
    panBody.appendChild(panBodyText);

    panel.appendChild(panBody);

    var panFoot = document.createElement("div");
    panFoot.setAttribute("class", "panel-footer");
    var btn1 = document.createElement("button");
    btn1.setAttribute("class", "btn btn-warning btn-block");
    var btn1Text = document.createTextNode("Edit");
    btn1.append(btn1Text);
    var btn2 = document.createElement("button");
    var btn2Text = document.createTextNode("Delete");
    btn2.append(btn2Text);
    btn2.setAttribute("class", "btn btn-danger btn-block");
    // btn2.setAttribute("onclick","deleteItem("+id+");")
    panFoot.append(btn1);
    panFoot.append(btn2);

    panel.append(panFoot);

    mainDiv.append(panel);

}

function deleteItem(id) {
    document.getElementById(id).style.display = "none";
}

function editItems(bname,bitem){
    var bName = document.getElementById(bname);
    var bPrice = document.getElementById(bitem);
    var bval = bName.innerText;
    var bpric = bPrice.innerText;

    console.log(bname);
    console.log(bitem);
    var PName = prompt("Enter Name of Brand");
    var pPrice = prompt("Enter Price");
    var pRam = prompt("Enter Ram");
    var pStorage = prompt("Enter Storage");
    var pcamera = prompt("Enter Camera");
    var pCpu = prompt("Enter CPU");

    bName.innerText =  PName;
    bPrice.innerText = pPrice + " " + pRam + "\n" + " " + pStorage + "\n"+pcamera + " "+ pCpu;


}

function sellItem(){

}

function pageRefresh(){
    document.location.href = "./product.html";
}

function search(){

    // pageRefresh();

    var searchBox = document.getElementById('searchBox');
    var mainClass =  document.getElementsByClassName('bNames');
    console.log(searchBox.value)
    
    for(var i=0;i<mainClass.length;i++){
      
        if(searchBox.value.toLowerCase() !== mainClass[i].innerText.toLowerCase()){
            mainClass[i].style.display = "none";
            mainClass[i].parentElement.style.display = "none";
            console.log(mainClass[i].innerText.toLowerCase(),"\n inside true");
    }
    else if(searchBox.value.toLowerCase() === mainClass[i].innerText.toLowerCase()){
        console.log("Checked");
        mainClass[i].style.display = "block";
        mainClass[i].parentElement.style.display = "block";
    }
}  
}