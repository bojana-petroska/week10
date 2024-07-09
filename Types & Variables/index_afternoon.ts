type NewStudent = {
  name: string;
  allScores: number[];
  attendance: number;
};

const students: NewStudent[] = [
  {
    name: 'bojana petroska',
    allScores: [85, 90, 78],
    attendance: 86,
  },
  {
    name: 'pavle pavlovski',
    allScores: [88, 92, 99],
    attendance: 88,
  },
  {
    name: 'ani zivkovska',
    allScores: [91, 85, 89],
    attendance: 93,
  },
  {
    name: 'sanja stojanovska',
    allScores: [65, 62, 68],
    attendance: 90,
  },
  {
    name: 'gordana cvetkovska',
    allScores: [55, 98, 92],
    attendance: 72,
  },
];

function calculateGrades(student: NewStudent[]): void {
  students.forEach((student) => {
    let grade: string;

    if (student.attendance < 75) {
      grade = 'F';
    } else {
      const totalScores = student.allScores.reduce((sum, acc) => sum + acc, 0);
      const averageGrades = totalScores / student.allScores.length;

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
    }

    console.log(`The grade for ${student.name} is ${grade}`);
  });
}

calculateGrades(students);
