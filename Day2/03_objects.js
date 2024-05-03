const mySym = Symbol("Key1");

const student1 = {
  name: "Sahid Raja Ansari",
  Faculty_Number: "20COB335",
  "Enrollment Number": "GL9796",
  [mySym]: "Sahid",
  Serial_Number: 45,
  Current_Semester: 8,
  Subjects: [
    "BioPhysics",
    "Mobile Computing",
    "Distributed And Parallel System",
  ],
};

// console.log(student1.name)
// console.log(student1["Enrollment Number"])
// console.log(student1)
// student1.Supervisor="DR Rashid Ali"
// console.log(typeof student1[mySym])

// student1.Current_Semester=student1.Current_Semester++
// Object.freeze(student1)
// student1.name="Baap"
// console.log(student1)

student1.greeting = function () {
  console.log("Assalamualaikum");
};

console.log(student1.greeting);
console.log(student1.greeting());
student1.whatIsYourName = function () {
  console.log(`I'm ${this.name}`);
};

console.log(student1.whatIsYourName());
