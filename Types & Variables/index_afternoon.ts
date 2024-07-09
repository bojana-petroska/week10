type NewStudent = {
  name: string;
  allScores: number[];
};

const students: NewStudent[] = [
  {
    name: 'bojana petroska',
    allScores: [85, 90, 78],
  },
  {
    name: 'pavle pavlovski',
    allScores: [88, 92, 99],
  },
  {
    name: 'ani zivkovska',
    allScores: [91, 85, 89],
  },
  {
    name: 'sanja stojanovska',
    allScores: [65, 62, 68],
  },
  {
    name: 'gordana cvetkovska',
    allScores: [55, 58, 52],
  },
];

function calculateGrades(student: NewStudent[]): void {
    students.forEach(student => {
        const totalScores = student.allScores.reduce((sum, acc) => sum + acc, 0);
        const averageGrades = totalScores / student.allScores.length;
        let grade: string;

        if (averageGrades >= 90) {
          grade = 'A';
        } else if (averageGrades >= 80) {
          grade = 'B';
        } else if (averageGrades >= 70) {
          grade = 'C';
        } else if (averageGrades >= 60) {
          grade = 'D';
        } else {
          grade = 'F';
        }
        console.log(`The grade for ${student.name} is ${grade}`);
    });  
}

calculateGrades(students);
