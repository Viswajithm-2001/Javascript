//getting inputs from user no validation, empty check, format check
var firstName;

var lastName;
function gettingInput()
{
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;
    var table = document.getElementById("table");
    var form=document.getElementById("form");
    var fullname = firstName+lastName;
    document.getElementById("fullname").innerHTML = fullname;
    table.style.visibility="visible";
    form.style.display="none";
}
