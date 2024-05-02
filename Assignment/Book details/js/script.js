class Books{
    Category;
    Book;
    AuthorEmail;
    AuthorName;
    Published;
    Price;
    constructor(category,book,authorEmail,authorName,published,price)
    {
        this.Category=category;
        this.Book=book;
        this.AuthorEmail=authorEmail;
        this.AuthorName=authorName;
        this.Published=published;
        this.Price=price;
    }
}
function validation()
{

}
var bookList = new Array();

var category;
var book;
var authorName;
var authorEmail;
var published;
var price;
function save()
{
    category = document.getElementById("val").value;
    book= document.getElementById("bookName").value;
    authorEmail=document.getElementById("authorMailID").value;
    authorName=document.getElementById("authorName").value;
    published = document.getElementById("published").value;
    price = document.getElementById("price");
    bookList.push(new Books(category,book,authorEmail,authorName,published,price));
    alert("Book info has been saved!")
}

function show()
{
    document.getElementById("categoryOut").innerHTML = category;
    document.getElementById("bookOut").innerHTML = book;
    document.getElementById("authormailOut").innerHTML = authorEmail;
    document.getElementById("authornameOut").innerHTML = authorName;
    document.getElementById("publihsedOut").innerHTML = published;
    document.getElementById("priceOut").innerHTML = price;
    document.getElementById("outcontent").style.display = "block";
    document.getElementById("inpcontent").style.display="none";
}