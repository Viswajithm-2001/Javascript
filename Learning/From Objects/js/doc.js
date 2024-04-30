//Js is an object oriented programming language
var Car = {
    brand:"tata",
    model:"nano",
    price:100000,
    print: function()
    {
        document.write("<h1>This is print function...</h1>");
    }
}
document.write("Brand name is : "+Car.brand);
Car.print();

//Constructor Objects
function Cars(brand,model,price)
{
    this.brand=brand;
    this.model=model;
    this.price=price;   
}

//we also can add property to object even after its created.
Car.fuelType = "petrol";
document.write(Car.fuelType)
//and we can delete it using delete keyword
delete Car.fuelType;
document.write(Car.fuelType)
