/* 
Mohammed Furqan Mehboob (mfm2467)
TPEO

Questions 1: 
Use a for-loop to make a 2D array of Car objects that is 10 rows by 10 columns. 
Each Car object should have the following properties: model, color, year, mpg, and id.
 Each Car object should have the same values for  model, color, year, and mpg but 
 different values for id that increment with each Car object made. For example, the 
 first car made should have id = 1, the second car made should have id = 2, etc.
*/ 

// Creating the Car Object 
function Car(model, color, year, mpg, id) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.mpg = mpg;
    this.id = id;
}

// Creating 2D Array of Car Objects
var carList = [];   
var count = 1;  // Keeping check of count of Car Objects.
for (var i = 0; i < 10; i++) {
    carList[i] = []; // Creating new row!
    for (var j = 0; j < 10; j++) { //Creating car Objects
         carList[i][j] = new Car("Nissan Altima", "Black", 2016, 10000, count); 
        count++; // incrementing count
    }
}


/* 
    USING PUSH TO CREATE 2D Array!
// Creating all the columns
for (var i = 0; i < 10; i ++) {
    carList.push([]);
}
// Going through each row!
for (var i = 0; i < 10; i++){
    for (var j = carList[i].length; j < 10; j++) {
        carList[i].push(new Car("Nissan Altima", "Black", 2016, 10000, count));
        count ++
    }
}
*/ 


/* 
Question 2:
Write a function getCarsBetweenIds that takes two parameters: idMin and idMax. 
Return a new array of the Car objects that have an id between idMin and idMax 
(idMin <= id <= idMax). Before returning the array, change all the Car objects’ 
color property to “blue”. Test your function by calling it 3 times and printing the 
results to the terminal.
*/

// Creating function that will find the car objects between two iDs.
function getCarsBetweenIds(idMin, idMax) {
    returnArray = []; // the array that will be returned.
    idArray = [];
    // Debugging if idmin is lower than max.
    if (idMin > idMax) {
        // Setting up temporary values.
        idMintemp = idMin;
        idMaxtemp = idMax;
        // Creating the new instances.
        idMin = idMaxtemp;
        idMax = idMintemp;
    }
    // Creating an IdArray that will hold all of the Ids wanted.
    for (var i = idMin; i <= idMax; i++) {
        idArray.push(i);
    }
    // Iterating through the car objects list
    for (var i = 0; i < carList.length; i++){
        for (var j = 0; j < carList[i].length; j++) {
            //if an Id is found, add it to the array.
            if (idArray.indexOf(carList[i][j].id) !==  -1) { 
                carList[i][j].color = 'blue'; // changing color to blue
                returnArray.push(carList[i][j]);

            }
        }
    }
    return returnArray;
}





// Testing code

console.log('Question 1:');
console.log(carList); 
console.log();

console.log("Question 2:")
console.log(getCarsBetweenIds(0, 10));
console.log(getCarsBetweenIds(24, 100));
console.log(getCarsBetweenIds(16, 30));
console.log(getCarsBetweenIds(2,2));
console.log(getCarsBetweenIds(20, 16));
console.log();