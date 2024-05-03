const a = 1;
let b = 10;
var c = 20;

if (true) {
  let b = 2;
  var c = 300;
  console.log(`Inner Loop Values (${a},${b},${c})`);
}

console.log(`Outer Loop Values (${a},${b},${c})`);

function addTwo() {
  let name = "Sahid";
  const course = "B.tech";
  function addOne() {
    let name = "Rifat";
    let gender = "F";
    console.log(`${name} is and course is ${course}`);
    console.log(`${gender}`);
  }
  // console.log(`${gender}`);
  addOne();
  console.log(`${name} is and course is ${course}`);
}

addTwo();
printName("Riaft")
function printName(name) {
  console.log(`My name is ${name}`);
}
printName("Sahid")

// printFatherName("Zamir") //Hoisting Error
const printFatherName = function printName(fatherName) {
  console.log(`My Father's name is ${fatherName}`);
};
printFatherName("Asfaque")
