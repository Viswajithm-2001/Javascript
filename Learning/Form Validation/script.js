//Validate form 
function validate()
{
    var username = document.getElementById("uname");
    var password = document.getElementById("password");
    if(username.value.trim()=="" || password.value.trim()=="")
    {
        alert("please enter proper value");
        return false;
    }
    else{
        if(password.value.trim().length < 5)
        {
            alert("password too short");
            return false;
        }
        return true;
    }
}