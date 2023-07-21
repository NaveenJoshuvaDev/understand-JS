const greet = function (greeting) {
  console.log(`${greeting} `);
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("hey"); //how the value still hold on of greetfunction
//Becoz of closure
//closure is one of the misunderstood topics in javascript.
greeterHey("nohit");

greet("Hello")("naveen");
//What's the point of function returning other functions
//if you use programming paradigm called functional programming
