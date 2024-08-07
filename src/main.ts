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
    age: 17,
    grades: numbers
}

console.log(
    studen.firstName + ' ' + studen.lastName + ' (' + studen.age + ')', '\n',
    '==============================', '\n',
    'Grades: ', studen.grades.toString()
)

/*
Step 2: Allow strings and numbers as grades
Task:


    Ensure that besides grades as numbers (German system), values A to F (American system) are also supported as grades. The function should output the student's grades.


Example:


    Anton Meier (17)
==============================

Noten:
A,2,F,3,1,B,2,5
*/

type Grade = number | string;

type StudentUpdate2 = {
    firstName: string,
    lastName: string,
    age: number,
    grades: Grade[]
}

const studentUpdate2: StudentUpdate2 = {
    firstName: 'Anton',
    lastName: 'Meier',
    age: 17,
    grades: ['A', 2, 'F', 3, 1, 'B', 2, 5]
}

console.log(
    studentUpdate2.firstName + ' ' + studentUpdate2.lastName + ' (' + studentUpdate2.age + ')', '\n',
    '==============================', '\n',
    'Noten: ', '\n',
    studentUpdate2.grades.toString()
)

/*
Step 3: Allow undefined as a value (displayed as *)
Task:


Ensure that "undefined" is now supported as a value in the grades. The function should output the student's grades and represent "undefined" as "*". (For example, if the student was absent and not graded).


Example:


Anton Meier (17)
===========================

 Noten:
A,2,*,3,1,B,*,5
 */

type GradeUpdate3 = number | string | undefined;

type StudentUpdate3 = {
    firstName: string,
    lastName: string,
    age: number,
    grades: GradeUpdate3[]
}

const studentUpdate3: StudentUpdate3 = {
    firstName: 'Anton',
    lastName: 'Meier',
    age: 17,
    grades: ['A', 2, undefined, 3, 1, 'B', undefined, 5]
}

console.log(
    studentUpdate3.firstName + ' ' + studentUpdate3.lastName + ' (' + studentUpdate3.age + ')', '\n',
    '==============================', '\n',
    'Noten: ', '\n',
    studentUpdate3.grades.map(grade => grade === undefined ? '*' : grade).join(",")
)

