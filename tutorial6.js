/* 
    string literals ("" or '')

    var string = "hello!"; -> string primitives
    var stringObejct = new String("hello!") - this is a string object. 

    Both of the things above are doing the same thing. 

    Strings are immutable . That means that when string are created, they are unmodifiable and read-only. 

    Need to update them to change the string. 

    String Concatenation
        string1 + string2 --> more common way of doing this.
        string1.concat(string2, ...) --> will append to the end of string one.

        var number = 3;
        console.log("My favorite number is: " + number); Prints it out normally.

    Accessing Individual Characters 
        string[index]
            This uses array syntax (we will cover this)
            Strings are zero-indexed, meaning first index is 0 and second character is 1. 
        string.charAt(index)
            Zer-indexing rules still apply 
    
    Acessing Individual Characters Example 
        var string = "JavaScript";
        console.log(string[0] + string.charAt(4));
        OUTPUT of the code: 
            JS 
        
        var string = "JavaScript";
        string[0] = "j";
        string[4] = "s";
        console.log(string);

        What is the outut of this code? 
            JavaScript 
            - Remember Strings are IMMUTABLE.
    
    Introducing Substrings 
        Need t oaccess sequences of string within strings to avoid code repetition
    
    slice()
        string.slice(beginIndex)
        string.slice(beginIndex, endIndex)

        Indeces can be negative numbers as well. 

        Everything up to the fourth position, but not including the fourth position. 

        console.log(string.slice(4,4)) -> will return nothing. 
    To get length of string: string.length

    substring()
        string.substr(beginIndex)
        string.substr(beginIndex, endIndex)

        If beginIndex > endIndex, then they are swapped. 
        Negative numbers ARE INTREPRETED AS 0 for this function.
    
    Finding Something Inside String 
        What if we want to find the location of a string within a string? 

        We have two methods that can allow us to do this: 
            - string.indexOf("characters") - returns index of first occurance "characters" in a string, 
               -1 if not found.
            - string.lastIndexOf("characters") - returns index of last occurence of "characters"
                in string 
        Changing String Casing 
            console.log(stirng.toUpperCase()); - HELLO EVERYONE!
            console.log(string.toLowerCase()); = hello everyone!
        These functions can be chained together. 


Arrays 
    - Arrays are an ordered list of values. Values/elements can be of any time and length 
       of the array is not fixed.
    - Accessing Array Items 
        flowers[0]; 
    - Accessing Array Item with a Loop
        var flowers = ["aster", "daffodi", "periwinkle", "lilies"]
        for (var i = 0; i < flowers.length; i ++) {
            console.log(flowers[i]);
        }
    - The push function adds it to teh end of the array
    - THe unshift function to the beggining of the array. 

    Removing Items In Array 
        - To remove an item from the end of the array, we use pop method 
            flowers.pop();
    
    Slicing an array 
        slice(starting index, ending index - 1)
    Can also use indexOf and lastIndexOf. 
    Merging Arrays 
        Merging two arrays utilizing the concat method!
    
    Introducing Number Objects 
        % = modulus (used to find the remainder). Used to find even and odd numbers.
            0 or 1 (38 % 2 == 0, 39 % 2 == 1)
        Incrementing/Decrementing Quirk 
            var i = 0;
            var j = i ++ ;

            After code snippet runs, i will be 1 and j will be 0. 
                var i = 0;
                var j = ++i;
            After both above code snippet runs, i will be 1 

        Can find the absolute value as well. 
*/ 

function truncate(string, number) {
    return string.substr(0, string.length - number);
}

console.log(truncate("Hello World", 1));
console.log(truncate("JavaScript", 6));
console.log(truncate("TPEO", 4));

function capitalizaAllFirstLetters(strings) {
    for (var i = 0; i < strings.length; i ++) {
        strings[i] = strings[i][0].toUpperCase() + strings[i].substr(1);  
    } 

    return strings;
}

console.log(capitalizaAllFirstLetters(["brayden", "miller", "mohammed", "f", "mehboob"]));

function swapCase(string) {
    var lowercase = string.toLowerCase();
    var uppercase = string.toUpperCase();
    var newString = "";

    for (var i = 0; i < string.length; i++) {
        if (string[i] == uppercase[i]){
            newString += lowercase[i];
        } else {
            newString += uppercase[i];
        }

    }
    return newString;
}

console.log(swapCase("MohAmmed F MeHbooB"));

