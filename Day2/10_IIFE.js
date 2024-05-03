//Immediactely Invoked Function Expression
(function chai() {
  console.log("First Connected");
})();

((server) => {
  console.log("Second Connected to ", server);
})("AWS");
