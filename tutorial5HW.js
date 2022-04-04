/* 
Mohammed Furqan Mehboob (mfm2467)
TPEO

Questions 1: 
Create a constructor for a Car object. 
Each Car object should contain the following 
properties: model, year, color, and mpg. 
Use the constructor to create 3 different
 Car objects. 
Print out the mpg of each car to the console.
*/ 

//Creating the constructor function with param.
function Car (model, year, color, mpg){
    this.model = model;
    this.year = year;   //Initializing the param.
    this.color = color;
    this.mpg = mpg;
}

// Creating new objects from the Car constructor.
var tesla = new Car("Model X", 2021, "White", 10000);
var mercedes = new Car("E350", 2022, "Black", 0);
var nissan = new Car("Altima", 2015, "Red", 100000);

// Printing the car constructors.
console.log("Problem 1");
console.log();
console.log("Tesla:", tesla.mpg);
console.log("Mercedes:", mercedes.mpg);
console.log("Altima:", nissan.mpg);
console.log();

/*
Question 2:

Create a constructor for a Vehicle object. 
Each Vehicle object should contain only one 
property: car. Using the 3 Car objects you created 
previously, create 3 Vehicle objects. 
Print out the mpg of the car property in each 
Vehicle object.
*/

// Creating the Vehicle constructor
function Vehicle(car){
    this.car = car;
}

// creating objects from the Vehicle constructor.
var teslaV = new Vehicle(tesla);
var mercedesV = new Vehicle(mercedes);
var nissanV = new Vehicle(nissan);

//Printing out the mpg from the vehicle class
console.log("Problem 2");
console.log("Tesla Vehicle:",teslaV.car.mpg);
console.log("Mercedes Vehicle:",mercedesV.car.mpg);
console.log("Nissan Vehicle:",nissanV.car.mpg);
console.log();




//Push your completed code to your GitHub repository!

