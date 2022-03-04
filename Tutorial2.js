// Beginning
var output = "Hello World";
console.log(output)
// The Middle - Calculating Area
var length = 3;
var width = 9;
console.log(length * width)
// Function Calculator 
function calculateArea(length, width) {
    console.log(length*width);
}
calculateArea(length, width);

// Another function 
function calculatePerimeter(length, width) {
    console.log(2 * (length + width));
}
calculatePerimeter(length, width)

// Learning about return keyword 
function calculateArea(length, width) {
    return length * width
}

var area = calculateArea(8,6);
var doubleArea = area * 2;
console.log(area);
console.log(doubleArea);

// Return Function with the Perimeter function
function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

var perimeterInFeet = calculatePerimeter(7,8);
console.log(perimeterInFeet);
var perimeterInInches = perimeterInFeet * 12;
console.log(perimeterInInches);


// Returning point is the stoppin point of the function. Anything after that, won't work.


// Practice with the Teacher ! 

function triangleArea(base, height) {
    return (base * height) / 2;
}

var area = triangleArea(5,10);
var areaAgain = triangleArea(2,4);
var areaFinal = triangleArea(4,20);

console.log(area);
console.log(areaAgain);
console.log(areaFinal); 
