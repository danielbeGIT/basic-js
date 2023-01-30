// let student1 = "Deadpool";
// let student2 = "Black Widows";
// let student3 = "Iron Man";

// console.log("Student 1 is named", student1);
// console.log(`Student 1 is named ${student1}`);

// arrays
let students = [
    "Deadpool",     // 0
    "Black Widow",  // 1
    "Iron Man",     // 2
    "Spider-Man"    // 3
];

console.log("Students:", students);
console.log("The second student's name is:", students[1]);
console.log(`We have ${students.length} students in our class.`);

let studentCount = students.length;
console.log(`We have ${studentCount} students in our class.`);

students[1] = "Black Window";
// students[2] = "Steel Man";
console.log(students);

let names = students.join(', ');
console.log(`The students names are: ${names}`);

// find index of string "Iron Man" and Thanos
console.log("Index of Iron Man:", students.indexOf("Iron Man"));
console.log("Index of Thanos:", students.indexOf("Thanos"));

console.log(students.includes("Deadpool"))
console.log(students.includes("Alivepool"))

// add to student list
students.push("Wanda");
console.log(`The students names are: ${students.join(', ')}`);

let newLength = students.push("Ant-Man");

// add to start of student list
// students.unshift();

// add to end of student list
// students.push()

// remove the first from student list
// students.shift();

// remove the last from student list
// students.pop();

let otherStudents = [
    "Batman",
    "Superman",
    "Wonder Woman"
];

let machup = students.concat(otherStudents); // <-- does not change students array, returns a NEW array with the otherStudents concatenated at the end

console.log("Students after merge:", students); // students are unchanged

console.log("Machup:", machup); // new array with both students and otherStudents

// multi-dimensional array (arrays in arrays)
// let studentsForTest = [
//     [   // 0
//         "Johan",    // 0
//         42,         // 1
//         "Nordström" // 2
//     ],      
//     [   // 1
//         "Alicia",   // 0
//         55,         // 1
//         "Johansson" // 2
//     ]
// ];

let johan = [
    "Johan",    // 0
    42,         // 1
    "Nordström" // 2
];

let alicia = [
    "Alicia",   // 0
    55,         // 1
    "Johansson" // 2
];

let studentsForTest = [
    johan,      // 0
    alicia      // 1
];


console.log("Students", studentsForTest);

let studentsTest = [
    "Johan",    // 0
    "Alicia",   // 1
    "Elliot",   // 2
    "Maja"      // 3
];

let pointsTest = [
    42, // 0
    55, // 1
    80, // 2
    18  // 3
];

console.log(`${studentsTest[2]} got ${pointsTest[2]} points.`)