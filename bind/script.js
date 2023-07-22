//bind also manually set this keyword
//diff btw call and apply
// bind doesn't immediately call the function.instead it returns a new function
//where the this keyword bound
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  //below enhanced object literal
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Victor");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};
const book = lufthansa.book;

//Call Method
book.call(eurowings, 23, "Sarah Williams");

//console.log(eurowings);
book.call(lufthansa, 239, "Mary Cooper");
//console.log(lufthansa);
const flightData = [583, "George Cooper"];
//Apply method
book.apply(eurowings, flightData);
//console.log(eurowings);

//Bind Method
//book.call(eurowings, 23, "Sarah Williams");
//book.bind(eurowings); //will return a new function
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookLH(299, "john");
bookEW(23, "Steven williams");
eurowings;
lufthansa;
const bookEW23 = book.bind(eurowings, 23); //separate flight bokking function
bookEW23("gowtham");
bookEW23("gowri");
eurowings;

//use case for bind methods
//1.when we use objects together with event listeners

//With Event Listeners
//Adding new property to lufthansa object
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
//document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//In eventhandler ("click", lufthansa.buyPlane); this keyword attached to th element ocument.querySelector(".buy") so it doesn't work
//lufthansa.buyPlane();
//then how to use this keyword using bind or call
//We need to pass a function here not to call it
//call method call a function immediately
// but bind returns a new function
//bindmethod returns a Partial Application

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
//above code is equal to
// addVat = value => value +value * 0.23;
console.log(addVAT(100));
//chalenge now
