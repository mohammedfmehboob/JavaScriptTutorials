/*
 Name: Mohammed Furqan Mehboob (mfm2467)
 Homework for Week 2 of TPEO JavaScript 
 March 3rd, 2021

Question 1: 

Write a function named countUpwardsByThree that has no parameters. In this function, 
use a for loop or while loop to count from 0 to 30 by 3, and output each number to the
 terminal as the loop counts (print 0, print 3, print 6, …, print 30). Call this 
 function once.
*/ 
function countUpwardsByThree() {
    for (var i = 0; i <= 30; i += 3) {
        console.log(i);
    }
}
console.log("Count Upwards By Three:");
console.log();
countUpwardsByThree();

console.log();

console.log("Guess My Favorite Number:");
console.log();
/*
Question 2: 

Write a function named guessMyFavoriteNumber that takes in one parameter named guess.
In the function, output “You guessed my favorite number!” to the terminal if guess is 
equal to your favorite number (you pick this number), and print out “Try again!” 
otherwise. Call this function multiple times.
*/
function guessMyFavoriteNumber(guess) {
    favorite_num = 36;
    
    if (favorite_num == guess) {
        console.log("You guessed my favorite number!");
    } else {
        console.log("Try again!");
    }
}
guessMyFavoriteNumber(35);
guessMyFavoriteNumber(34);
guessMyFavoriteNumber(0);
guessMyFavoriteNumber(-10);
guessMyFavoriteNumber(8);
guessMyFavoriteNumber(50);
guessMyFavoriteNumber(1700);
guessMyFavoriteNumber(89);
guessMyFavoriteNumber(36);

/*
Question 3: 

Write a function named convertNumberToDay that takes one parameter named number. 
In the function, use a switch statement to output the day of the week associated with
numbers from 0 to 6 to the terminal (if number is 0 then  output Sunday, if number 
is 1 then output Monday, etc.). Call this function 7 times for each number 
from 0 to 6.
*/
function convertNumberToDay(number) {
    switch(number) {
        case 0:
            console.log("Sunday");
            break;
        case 1: 
            console.log("Monday");
            break;
        case 2: 
            console.log("Tuesday");
            break;   
        case 3: 
            console.log("Wednesday");
            break;   
        case 4: 
            console.log("Thursday");
            break;  
        case 5: 
            console.log("Friday");
            break;    
        case 6: 
            console.log("Saturday");
            break; 
        default: 
            console.log("Not a real day.");      
  
    }
}
console.log();
console.log("Number to Day!")
console.log();
for (var i = 0; i <= 6; i ++) {
    convertNumberToDay(i);
}
console.log();


