/*
Tutorial # 4

var timeoutID = setTimeout(functionToDelay, delayinMilliseconds, functionParameters....)
   (TImeoutKey) (Function Call) (Name of the Function we want to delay)

function showWebsiteTutorial() {
    ...
}

var timeoutId = setTimeout(showWebsiteTutoiral, 2000);

function sum(a,b) {
    console.log(a + b);
}

var timeoutId = setTimeout(sum, 5000, 3, 6);

setTimeout is asynchronous (DOES NOT DO IT LINE BY LINE!)

setTimeout(console.log, 5000, 1);
setTimeout(console.log, 3000, 2);
setTimeout(console.log, 1000, 3);

CleaTIMEOUT FUNCTION:

clearTimeout(timoutId);
(function call) (Timeout Key)

if (isImpatient) {
    clearTimeout(timouetId);
}                                DELAY UNTIL THE FUNCTION IS CALLED. 

Introducing setInterval

setInteval allows us to execute code repeatedly at specific intervals of time- think of it as running
setTimeout in a loop! For example, we could run code every 3 seconds using setInterval

var intervalId = setInterval (functionToDelay, delayInMilliseconds, functionParameters)

function showDate () {
    console.log(new Date().toLocaleString());
}

var intervalId = setInterval(showDate, 1000)

setInterval is asynchronous 

setInterval(console.log, 5000, 1);
setInterval(console.log, 3000, 2);
setInterval(console.log, 1000, 3);

will print out: 3,3,3,2,2,3 (will print out differently each TimeRanges, could be a huge prolem)

setInterval is widely used in the real word when its used in 
1. Animations
2. Displaying countdown, timers, stopwatches, etc. 

function showDate() {
    console.log(new Date().toLocaleString());
}

function clearDateInterval (intervalID) {
    clearInterval(intervalID);
}

var intervalID = setInterval(showDate, 1000);
setTimeout(clearDateInterval, 11000, intervalID);

Global Scope 

If it is a direct child of the browsers's window subject 

Globallby scoped variable, delcare the variable outside of the functions. 

text = "hello";

var name = "jonathan";

function returnName () {
    
    text2 = "bye";
    return name;
}

won't be able to run name becuase it was declared inside of the function. 

Local Scope: Block Scope  (INISDE OF THE BRACES)

Variable Hoisting in JavaScript 

var name = "aten";

function printName() {
    console.log(name); //NOt ATEN, but UNDEFINED
    var name = "jonathan";
    console.log(name); //johnathan
}

*/

var currentSecond = 1; 

function printNumber() {
    console.log(currentSecond);
    currentSecond++; 

}

// print one by one form 1 to 15 every second. 
var intervalId = setInterval(printNumber, 1000, currentSecond); 
setTimeout(clearInterval, 16000, intervalId); 

