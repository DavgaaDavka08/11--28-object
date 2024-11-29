let students = [
  {
    name: "dolgoon",
    age: 18,
    grades: [10, 20, 30, 90, 80],
    gender: "male",
  },
  {
    name: "anguuch",
    age: 18,
    grades: [10, 20, 30, 60, 50],
    gender: "male",
  },
  {
    name: "god",
    age: 18,
    grades: [60, 65, 70, 90, 80],
    gender: "male",
  },
  {
    name: "zaya",
    age: 18,
    grades: [10, 20, 30, 90, 80],
    gender: "female",
  },
  {
    name: "ganaa",
    age: 18,
    grades: [60, 50, 30, 90, 80],
    gender: "male",
  },
  {
    name: "zulaa",
    age: 18,
    grades: [50, 80, 30, 90, 80],
    gender: "female",
  },
  {
    name: "suhee",
    age: 24,
    grades: [10, 20, 30, 50, 59],
    gender: "male",
  },
  {
    name: "moogii",
    age: 30,
    grades: [80, 60, 65, 90, 80],
    gender: "female",
  },
  {
    name: "bataa",
    age: 20,
    grades: [10, 20, 30, 90, 80],
    gender: "male",
  },
  {
    name: "jargalmaa",
    age: 24,
    grades: [60, 65, 88, 90, 80],
    gender: "female",
  },
  {
    name: "anton",
    age: 20,
    grades: [60, 70, 30, 90, 80],
    gender: "male",
  },
  {
    name: "zaya",
    age: 35,
    grades: [60, 66, 88, 90, 80],
    gender: "female",
  },
  {
    name: "ganzo",
    age: 30,
    grades: [60, 80, 60, 90, 80],
    gender: "male",
  },
  {
    name: "togoldor",
    age: 20,
    grades: [60, 20, 80, 90, 80],
    gender: "male",
  },
  {
    name: "safar",
    age: 18,
    grades: [77, 66, 30, 90, 80],
    gender: "male",
  },
  {
    name: "tulgaa",
    age: 19,
    grades: [50, 80, 30, 90, 80],
    gender: "male",
  },
  {
    name: "enhlen",
    age: 26,
    grades: [60, 65, 30, 90, 80],
    gender: "male",
  },
  {
    name: "horloo",
    age: 30,
    grades: [66, 80, 60, 90, 80],
    gender: "male",
  },
  {
    name: "altka",
    age: 22,
    grades: [60, 80, 50, 90, 80],
    gender: "male",
  },
  {
    name: "Todoo",
    age: 24,
    grades: [100, 100, 100, 90, 80],
    gender: "male",
  },
];
// { name: "Bat-Erdene", age: 15, grades: [40, 50, 60, 70, 80], gender: "male" }

//   function findOneStudentAverageGrade(oneStudent) {
//     let grades = oneStudent.grades;
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//       sum = sum + grades[i];
//     }
//     let average = sum / grades.length;
//     return average;
//   }
// //   console.log(findAllAverageGrade(students[3]));
//   function findAllAverageGrade(allstudents){
//     let num=[0]  ///
//     for(let i=0; i<allstudents.length;i++){
//         let avarege =findOneStudentAverageGrade(allstudents[i]);
//         console.log(avarege) ///
//     }
//     return num
//   }
//  let answer=findAllAverageGrade(students)
//  console.log (answer)

///nnasnii dundaj
// function allAge(hevle){
//     let age=hevle.length
//     for(let i=0;i<hevle.length;i++){
//     }
//     return age
// }
//  let answer=allAge(students);
//  console.log('nasii dundaj',answer)
///heden eregtei heden emegtei baigaag oly
function er(find) {
  let tanih = [];
  let male = 0;
  for (let i = 0; i < find.length; i++) {
    if (find[i].gender == "male") {
      tanih.push(find[i].gender);
      male = male + 1;
    }
  }
  console.log(male);
  return tanih;
}

function em(find) {
  let tanihhh = [];
  let female = 0;
  for (let i = 0; i < find.length; i++) {
    if (find[i].gender == "female") {
      tanihhh.push(find[i].gender);
      female = female + 1;
    }
  }
  console.log(female);
  return tanihhh;
}

let answer = er(students);
console.log("eriinh ni", answer);
let answer2 = em(students);
console.log("emiinh ni", answer2);

function erEmDundaj(find) {
  let x = er(find);
  let y = er(find);

  let b = (x / y) * 100;
  return b;
}
console.log(erEmDundaj(students));
////
///
//

function erEmDundaj(find) {
  let x = em(find);
  let y = em(find);

  let b = (x / y) * 100;
  return b;
}
console.log(erEmDundaj(students));

//afafdsvsvadcfa
