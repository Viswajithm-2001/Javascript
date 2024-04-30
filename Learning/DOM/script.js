//buttons and get element by ID selectors
function buttonClick(){
    //alert("button clicked");
    var x=document.getElementById("head2").innerHTML;
    alert(x);
}

//get user input from textbox
function getInput()
{
    var str = document.getElementById("text1").value;
    alert(str);
}
//radio button input
function radio()
{
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    if(rd1.checked==true)
    {
        alert(rd1.value);
    }
    else if(rd2.checked==true)
    {
        alert(rd2.value);
    }
    else
    {
        alert("none selected...")
    }
}
//input from drop down box
function dropdown()
{
    var select = document.getElementById("selectbox");
    alert(select.options[select.selectedIndex].value);
}

//get element by tag name :- p tag similarly we can use it for classname
function changeStyling()
{
    var para = document.getElementsByTagName("p");
    para[0].style.fontSize = "25px";
    //para[0].style.color = "red";
    para[1].style.fontStyle="italic";
    para[2].style.backgroundColor="blue";
    para[3].style.fontWeight="bold";
}


//on mouse over and mouse into in JS
function setNewImg()
{
document.getElementById("img").src="images/img2.png";
}
function setOldImg()
{
document.getElementById("img").src="images/img4.png";
}