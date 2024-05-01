//getting inputs from user no validation, empty check, format check
var firstName;
var lastName;
var email;
var phone;
var password;
var gender;
var address;
var dob;
var time;
var languages;
function gettingInput()
{
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    gender = document.querySelector('input[name="gender"]:checked');
    address = document.getElementById("address").value;
    dob = document.getElementById("dob").value;
    time = document.getElementById("time").value;
    languages = document.querySelectorAll('[name="language[]"]:checked');
    
    
    var table = document.getElementById("table");
    var form=document.getElementById("form");
    var fullname = firstName+lastName;
    document.getElementById("fullname").innerHTML = fullname;
    document.getElementById("emailID").innerHTML=email;
    document.getElementById("phoneNumber").innerHTML=phone;
    document.getElementById("gender1").innerHTML=gender.value;
    document.getElementById("address1").innerHTML=address;
    document.getElementById("date").innerHTML= dob;
    document.getElementById("time1").innerHTML=time;
    var str = "language";
    var count=1;
    for(var i=0;i<languages.length;i++)
    {
        document.getElementById(str+count).innerHTML=languages[i].value;
        count+=1;
    }
    table.style.visibility="visible";
    form.style.display="none";
}
