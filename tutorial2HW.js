/*
 Name: Mohammed Furqan Mehboob (mfm2467)
 Homework for Week 2 of TPEO JavaScript 
 March 3rd, 2021

Question 1: 

Write a function named sumOfSquareAreas that takes two parameters: a and b, 
which each represent the side lengths of two different squares. 
Return the value of the sum of the areas of these squares 
(for example, if a = 9 and b = 3, then we want to return 90). 
Then, call this function 3 times with different values for a and b 
and output the results to the terminal by running your code.
*/ 

function sumOfSquareAreas(a, b) {
    return ((a ** 2) + (b ** 2));
}
var first_sum = sumOfSquareAreas(9,3);
var second_sum = sumOfSquareAreas(6, 10);
var third_sum = sumOfSquareAreas(8, 20);

console.log("First sum of square areas:", first_sum);
console.log("Second sum of square areas:", second_sum);
console.log("Third sum of square areas:", third_sum);

/*
Question 2: 

Write a function named gradeCalculator that takes three parameters: 
homeworkAvg, quizAvg, and examAvg, which each represent your average 
for a class on homework, quizzes, and exams, respectively. 
Return the value of your overall grade in the class if homework is weighted at 10%, 
quizzes are 15%, and exams are 75%. Then, call this function 3 times with different values 
for homeworkAvg, quizAvg, and examAvg and output the results to the terminal by 
running your code.

*/

function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    hw = homeworkAvg * 0.10;
    quiz = quizAvg * 0.15;
    exam = examAvg * 0.75;
    total_grade = hw + quiz + exam;
   // console.log("HW:", hw);
    //console.log("Quiz:", quiz);
    //console.log("Exam:", exam);
    return total_grade;
}

var first_grade = gradeCalculator(10, 15, 75); 
var second_grade = gradeCalculator(20, 50, 100);
var third_grade = gradeCalculator(100,100,100);

console.log("First grade:", first_grade);
console.log("Second grade:", second_grade);
console.log("Third grade:", third_grade);




