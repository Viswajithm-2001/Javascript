document.write("<h1>Heading</h1>")
document.write("Hello world!<br>")
document.write("hi")
//comment
/*Comments in JS */

//Variables in JS
//JS is a loosely and a dynamically typed language so no need to define variable types instead use var keyword
var num = 16;
var bool = false;
var text = "hello world";
document.writeln(num+"<br>")
alert(text);//shows pop up in web page.

//addition for arithmetic..
var a = 10;
var b = 20;
document.write(a+b===30+"");

//If else
var x=5;
if(x%2!=0){
document.write("<h5>"+"true"+"</h5>");
}
else{
    document.write("<br>false");
}

//switch case in JS
var num1 = 1;
switch (num1) {
    case 1:
        document.write("<br>Good Day")
        break;

    default:
        document.write("<br>One day");
        break;
}
//looping
//for loop
document.write("Forloop<br>");
for(var i=0;i<=5;i++){
    document.write("<"+i);
}
//while
document.write("<br>While loop<br>");
var x=0;
while(x<10){
    document.write(x+" ");
    x++;
}
//do while
do{
document.write( " "+x);
x++;
}while(x<20);

//Functions
document.write("<br>Functions:<br>");
var a =10;
var b=10;
function addNum(a,b){
    return a+b;
}

document.write(addNum(a,b));

//Arrays
document.write("<br>Arrays<br>");
var values = [1,2,3,4,5];
document.write(values);
values[0]=5;//we can change the values like dynamic list.
document.write("element at 0th index is : "+values[0]+"<br>");
values.push(9);
document.write(values[values.length-1]);