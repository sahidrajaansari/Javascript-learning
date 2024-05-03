const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArray = myArray.filter((item) => item > 4);
// const newArray = myArray
//   .map((item) => item * 10)
//   .map((item) => item + 1)
//   .filter((item) => item > 40);
// console.log(newArray);

const value = myArray.reduce((accumulator, item) => accumulator + item, 0);
console.log(value)
