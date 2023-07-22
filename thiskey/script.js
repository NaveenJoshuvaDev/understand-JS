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

//Call , apply, and bind method to overcome this keyword problem.
//this keyword doesn't work in function.
/***************** */
//Call Method
book.call(eurowings, 23, "Sarah Williams");

console.log(eurowings);
book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

//Apply Method
//Its doesn't receive list of arguments
//It takes array of arguments
//It will take that elements from that array and pass it into the function.
const flightData = [583, "George Cooper"];
//book.apply(eurowings, flightData);
//console.log(eurowings);

//usage of apply is less in modern js we use call method for that
book.call(eurowings, ...flightData);
console.log(eurowings);

//These methods allows us to use this keyword explicitly to JS understanding.
//Bind method is important doing same thing as above method.
