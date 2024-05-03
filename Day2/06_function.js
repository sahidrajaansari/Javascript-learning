function isEligibleToVote(age, name) {
  if (age >= 18) {
    if (!name) {
      console.log("Enter Your Name");
      return;
    }
    return `Hello ${name} you are Eligible to vote`;
  } else {
    if (!name) {
      console.log("Name Not Found");
      return;
    }
    return `Hello ${name} !! you would be eligible after ${18 - Number(age)} years`;
  }
}
console.log(isEligibleToVote(16,"Ravi"));
console.log(isEligibleToVote(23,"Sahid"));
console.log(isEligibleToVote(12,""));
console.log(isEligibleToVote(15));
console.log(isEligibleToVote(25));
