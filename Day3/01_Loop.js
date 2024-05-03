const myArray = [1, 2, 3, 4, 5];
// for (const item of myArray) {
//   console.log(item);
// }

// const map = new Map();
// map.set("1", "Sahid");
// map.set("2", "Babbar");
// map.set("3", "Rifat");

// for (const [key, value] of map) {
//     console.log(`Serial Number is ${key} and its value is ${value}`)
// }

// const student={
//     name:"Sahid Raja Ansari",
//     facultyNumber:"20COB335",
//     EnrollmentNumber:"GL9796"
// }

// for (const key in student) {
//     console.log(student[key])
// }

// myArray.forEach((value,key,arr) => {
//   console.log(value,key,arr);
// });

myArray.forEach( function (value,key,arr) {
  console.log(value,key,arr);
});

function show(value){
    console.log(value);
}

myArray.forEach(show);
