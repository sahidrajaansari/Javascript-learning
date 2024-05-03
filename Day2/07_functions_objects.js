//Using Rest Operator i.e ...item(for uncountable Items)
function valueOfShoppingCart(username, ...item) {
  return item;
}

// console.log(valueOfShoppingCart("Sahid", 1, 2, 3, 4));

//For Objects
// const student1 = {
//   name: "Sahid",
//   facultyNumber: "20COB335",
// };

// objectHandler(student1);
// objectHandler({
//   name: "Rifat",
//   facultyNumber: "20COB461",
// });

// function objectHandler(currentObject) {
//   console.log(
//     `Hi My Name is ${currentObject.name}, and my faculty number is ${currentObject.facultyNumber}`
//   );
// }


//For Arrays
const myHero=["SuperMan","Batman","Human"]

function arrayHandler(myArray){
    return myArray
}

// console.log(arrayHandler(myHero));
console.log(arrayHandler([100,200,4000]));