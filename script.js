const students = [
  {
    name: "Olivia",
    firstGrade: 8,
    secondGrade: 9,
  },
  {
    name: "Ethan",
    firstGrade: 6,
    secondGrade: 5,
  },
  {
    name: "Ava",
    firstGrade: 4,
    secondGrade: 3,
  },
  {
    name: "Mason",
    firstGrade: 7,
    secondGrade: 8,
  },
  {
    name: "Liam",
    firstGrade: 9,
    secondGrade: 8,
  },
  {
    name: "Emma",
    firstGrade: 7,
    secondGrade: 9,
  },
  {
    name: "Noah",
    firstGrade: 8,
    secondGrade: 7,
  },
  {
    name: "Oliver",
    firstGrade: 6,
    secondGrade: 8,
  },
  {
    name: "Isabella",
    firstGrade: 5,
    secondGrade: 6,
  },
  {
    name: "Sophia",
    firstGrade: 8,
    secondGrade: 9,
  },
  {
    name: "Mia",
    firstGrade: 7,
    secondGrade: 8,
  },
  {
    name: "Charlotte",
    firstGrade: 9,
    secondGrade: 7,
  },
  {
    name: "Amelia",
    firstGrade: 6,
    secondGrade: 8,
  },
  {
    name: "Harper",
    firstGrade: 8,
    secondGrade: 9,
  },
  {
    name: "Evelyn",
    firstGrade: 7,
    secondGrade: 6,
  },
  {
    name: "Abigail",
    firstGrade: 9,
    secondGrade: 8,
  },
  {
    name: "Emily",
    firstGrade: 6,
    secondGrade: 7,
  },
  {
    name: "James",
    firstGrade: 8,
    secondGrade: 9,
  },
  {
    name: "Lucas",
    firstGrade: 7,
    secondGrade: 6,
  },
  {
    name: "Alexander",
    firstGrade: 9,
    secondGrade: 8,
  },
];

function average(gradeOne, gradeTwo) {
  return ((gradeOne + gradeTwo) / 2).toFixed(2)
}

let studentsName = []
let studentsFirstGrade = []
let studentsSecondGrade = []
let avg = []
let index = 0;

for (let student of students) {
  studentsName.push(student.name)
  studentsFirstGrade.push(student.firstGrade)
  studentsSecondGrade.push(student.secondGrade)
  
  avg[index] = average(studentsFirstGrade[index], studentsSecondGrade[index])

  if (avg[index]>=7){
    alert(`The average of the student ${studentsName[index]} was: ${avg[index]}. \nCongratulations, ${studentsName[index]}! You were approved at the test!`)
  } else{
    alert(`The average of the student ${studentsName[index]} was: ${avg[index]}. \nIt wasn't this time, ${studentsName[index]}! You must try it again!`)
  }
  index++
}