const myArr = [1, 2, 3, 4, "Hello"];
// console.log(myArr);
// console.log(myArr.length);
// console.log(myArr.indexOf("Hello"));
// console.log(myArr.includes("Babbar"));

// myArr.push("Gabba")
// console.log(`A : ${myArr}`);
// myArr.push("Babbar")
// console.log(`B : ${myArr}`);
// myArr.pop()
// console.log(`C : ${myArr}`);
// myArr.unshift(11)
// console.log(`D : ${myArr}`);
// myArr.shift()
// console.log(`E : ${myArr}`);

let myNewArray1=myArr.slice(0,4);
console.log(`${myNewArray1}`);
console.log(`A : ${myArr}`);

let myNewArray2=myArr.splice(0,4);
console.log(`${myNewArray2}`);
console.log(`B : ${myArr}`);



