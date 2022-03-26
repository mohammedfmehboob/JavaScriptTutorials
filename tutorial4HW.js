/* 
Mohammed Furqan Mehboob (mfm2467)
TPEO 
*/ 

/*
Question 1: 

Write a function named powersOfThree that prints out the powers of three up to 3⁹ 
(example: 1, 3, 9, …, 19683) using a for loop. Pick your favorite number out of all of
 these powers of three and also print out “This is my favorite power of three!” 
 when your favorite power of three prints. Use a timeout to call this function after 
 waiting 3 seconds.

 */ 
 
 // first way: with loop 

 // Function which prints the power of three until it hits the exponent of nine!
 function powersOfThree(num) {
     for (var i = 0; i <= 9; i += 1) {
         var expnum = num ** i; // Storing Variable
         if(expnum == 9) {  // Once favorite power found, print it out seperately.
             console.log('This is my favorite exponent of three!', expnum);
         } else {
            console.log(expnum);
         }

     }
 }

 
 /* 
Question 2: 

Write a function named everyTenSeconds that prints out “Hello World!” to the terminal 
every 10 seconds for a total of 2 minutes. Feel free to create any helper functions 
you need to accomplish this. Test your function by calling it once.

*/
// Creating Print Function
current10Second = 1;

function printHelloWorld() {
    console.log("Hello World! ", current10Second);
    current10Second++; 
}
// Timer that will display helloword every ten seconds for the rest of the time.
function timerThing() {
    var interValId = setInterval(printHelloWorld, 10000); 
    setTimeout(clearInterval, 130000, interValId);
} 

 // Testing 
setTimeout(powersOfThree, 3000, 3);
timerThing();
