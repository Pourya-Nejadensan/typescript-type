/*
Step 1: Write a function that outputs a student with their grades, where a student should be output with first name, last name, age, and a list of grades.


    Highlight the output of the first and last names, age, and grades with a line of 30x "=".
    Example:


Anton Meier (17)
==============================
Grades: 1,4,3,1,3,2,1,2
*/

type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: number[]
}

const numbers: number[] = [1,4,3,1,3,2,1,2]

const studen: Student = {
    firstName: 'Anton',
    lastName: 'Meier',
    age: 0,
    grades: numbers
}

console.log(
    studen.firstName + ' ' + studen.lastName + ' (' + studen.age + ')', '\n',
    '==============================', '\n',
    'Grades: ', studen.grades.toString()
)
