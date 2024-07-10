const greet = (name: string) => {
  console.log(`Hello, ${name}!`);
};
greet('bo');

const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(3, 4));

interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
  grade?: number;
  subject?: string;
}

interface GraduateStudent extends Student {
  graduationYear: number;
}

const graduateStudent: GraduateStudent = {
  id: 2498,
  name: 'Boris',
  age: 43,
  email: 'boris@gmail.com',
  graduationYear: 2023,
};

// Call a Function for the Student Interface
const studentDetails = (
  student: GraduateStudent,
  grade?: number,
  subject?: string
) => {
  const studentGrade = grade !== undefined ? ` with a grade of ${grade}` : '';
  const studentSubject =
    subject !== undefined ? ` for the subject ${subject}` : '';

  console.log(
    `The name of the student is ${student.name}${studentGrade}${studentSubject}. He is ${student.age}, his email is: ${student.email} and his graduation year was: ${student.graduationYear}.`
  );
};

studentDetails(graduateStudent, 9, 'mathematics');
studentDetails(graduateStudent);

// Translate an Arrow Function
const calculateAverageGrade = (students: Student[]): number => {
  const totalGrades = students.reduce(
    (sum, student) => sum + (student.grade || 0),
    0
  );
  return totalGrades / students.length;
};

const students: Student[] = [
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
