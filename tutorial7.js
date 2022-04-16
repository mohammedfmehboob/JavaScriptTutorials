/* 
Mohammed Furqan Mehboob
TPEO 
*/ 

/*

var broccoli = {
    name: "broccoli",
    price: 2.00,
    inventory: 30
}

Modifying Objects 

In JavaScript, we will often need to modify objects to update the value of properties set in the boejct
We do this in the same way we access objects and set the proeper ty to a new value 
- objectnName.propertyName = newValue
- objectName["propertyName"] = newValue

- broccili.price = 2.50;
- brocolli["inventory"] += 50; 


Adding Properties to Objects 

- objectName.newPropertyName = newValue 
- objectName["newPropertyName"] = newValue


You can't access a property that does not exist yet. 
console.log(brocooli.brand) - this prints undefined to the terminal

- Objects in JavaScript are inherithing their things from Prototypes.
Built in blueprints that bojects inherit from. 

Goes Object - prototype. These things happen under the hood. 

Introducing Prototype 
- employee1 - (inherits from prototype) - Employoee - (Inherits from prototype) - Object


Explicitly Defining Prototypal Inheritance 

In order to se an object to inherit the protpye of antoher, we seth the __proto__ property of the child object.


car.__proto__ = vehicle; (creates an object named vehicle that can be accessed). 

In JavaScript this keyword referes to teh object i t belongs to. 
Note that his context changes from instance to instance. 

const test = {
    prop: 42;
    func: function() {
        return this.prop;
    }

};


Revisiting the Conditional Operators 

== checks if two values are equal, and != checks if two values are unequal 

For example: 

if (x == 3) {
    doSomething();
}

If you use normal ==, then it automatically changes the number to a string to compare them.
=== does the opposite and checks for THE TYPE OF EACH ONE being used .
1 === TRUE = False, 1 == True

*/

function Exam(questionsCorrect, totalQuestions) {
    this.questionsCorrect = questionsCorrect;
    this.totalQuestions = totalQuestions;
}

var examList = [];
var questionsCorrect = [15, 25, 18, 20, 12, 6, 18, 21];
var totalQuestions = 25;
//creating the Exam objects in the array.
for (var i = 0; i < questionsCorrect.length; i++) {
    examList.push(new Exam(questionsCorrect[i], totalQuestions));
    console.log(examList[i]);
}

// Adding a new property, grade, to every exam object in the arry.

for (var i = 0; i < examList.length; i++) {
    var currentExam = examList[i];
    examList[i].grade = examList[i].questionsCorrect / totalQuestions * 100;
    examList[i] = currentExam;

}

// Calculating the class average.
var average = 0;
for (var i = 0; i < examList.length; i ++) {
    average += examList[i].grade;
}

average /= examList.length; 

console.log(average);