"use strict";
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet('bo');
const add = (a, b) => {
    return a + b;
};
console.log(add(3, 4));
const graduateStudent = {
    id: 2498,
    name: 'Boris',
    age: 43,
    email: 'boris@gmail.com',
    graduationYear: 2023
};
// Call a Function for the Student Interface
const studentDetails = (student, grade, subject) => {
    const studentGrade = grade !== undefined ? ` with a grade of ${grade}` : '';
    const studentSubject = subject !== undefined ? ` for the subject ${subject}` : '';
    return `The name of the student is ${student.name}${studentGrade}${studentSubject}. He is ${student.age}, his email is: ${student.email} and his graduation year was: ${student.graduationYear}.`;
};
console.log(studentDetails(graduateStudent, 9, 'mathematics'));
// Translate an Arrow Function
const calculateAverageGrade = (students) => {
    const totalGrades = students.reduce((sum, student) => sum + (student.grade || 0), 0);
    return totalGrades / students.length;
};
const students = [
    {
        id: 1,
        name: 'John Doe',
        age: 20,
        email: 'john.doe@example.com',
        grade: 85,
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 22,
        email: 'jane.smith@example.com',
        grade: 90,
    },
    {
        id: 3,
        name: 'Alice Johnson',
        age: 21,
        email: 'alice.johnson@example.com',
        grade: 88,
    },
];
console.log(calculateAverageGrade(students));
