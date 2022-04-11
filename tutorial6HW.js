/* 
Mohammed Furqan Mehboob (mfm2467)
TPEO

Questions 1: 
Write a function, reverse, that accepts one parameter: string. In the function, 
return the string but reversed (Example: if “hey” is the input, then return “yeh”). 
Call this function three times each with different inputs and print the results to the
terminal.
*/ 

// Creating the function
function reverse(str) {
    var reverse = "";  //Initializing reverse string
    for (var i = str.length-1; i >= 0; i--) {   // FOR loop going in opposite
        reverse += str[i];  //Adding last element into the string.
    }

    return reverse;
}

// Printing out the answers, test cases
console.log('Question 1:')
console.log("Reverse of hey:" , reverse("hey"));
console.log("Reverse of !.!123:", reverse("!.!123"));
console.log("Reverse of BRAyDeN MiLleR:", reverse("BRAyDeN MiLleR"));
console.log();

/*
Question 2:
Write a function, numVowels, that accepts one parameter: string. 
In the function, return the number of vowels string has. Call this function three 
times each with different inputs and print the results to the terminal.
*/
function numVowels(str) {
    str = str.toLowerCase(); // Lower casing the string.
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];    //initializing the vowels list.
    for(var i = 0; i < str.length; i++) {           // for loop going through string.
        if (vowels.indexOf(str[i]) !==  -1) {   //checking if string element
            count ++;                           // equals vowel.
        }
    }
    return count; //Returning count
}

console.log("Question 2");
console.log("Vowels in HEY:", numVowels('HEY'));
console.log("Vowels in Mohammed F Mehboob", numVowels('Mohammed F Mehboob'));
console.log('Vowels in Eat Unicorn', numVowels("Eat Unicorn"));
console.log();

/*
Question 3:
Write a function, numStringsShorterThanLength that accepts two parameters: 
strings (an array of strings) and length (a number). In the function, return the 
number of strings in strings that have a length less than length. Call this function 
three times each with different inputs and print the results to the terminal.
*/

//Initializing Function
function numStringsShorterThanLength(strings, length) {
    count = 0; 
    for (var i = 0; i < strings.length; i ++){ // iterating through strings array
        if (strings[i].length < length) {   // checking to see if string in array 
            count += 1;                     // is shorter than length
        }
    }
    
    return count; 
}

//Creating Strings arrays to test.
stringsOne = ['HEY', "LOSER", "BRUV","MATES", "CODING", "ME"];
stringsTwo = ["Mohammed", "Mehboob", "Franco", "Pestilli", "Brayden", "Miller"];
stringsThree = ["Geralt", "Of", "Rivia", "Elden", "Ring", "Harry", "Potter",
                "Spongebob", "SquarePants", "Lab", "Rats"];


//Test cases for the strings.
console.log("Question 3");
console.log("Test 1:", numStringsShorterThanLength(stringsOne, 3));
console.log("Test 2:", numStringsShorterThanLength(stringsTwo, 7));
console.log("Test 3:", numStringsShorterThanLength(stringsThree, 10));
console.log();
                                