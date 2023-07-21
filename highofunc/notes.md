# Higherorderfunctions

- To create a function that accepts other functions as an input.
- callback function means callback later by javascript when we point it.

```

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split("");
  return [first.toUpperCase(), ...others].join("");
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Orginal string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);//calling the function inside transformer function (HOF)

  console.log(`Transformed by: ${fn.name}`);//function has a property in HOF
};

transformer("JavaScript is the best!", upperFirstWord);//here upperFirstword is just value no calling
transformer("JavaScript is the best!", oneWord);



```

- HOF function as input and returning back a function
- This concept of callback functions used in all the time in built in Javascript functions.
- HOF here operates at a higher level of abstruction leaving the low level details to this low level functions.

```

//Example
const high5 = function(){
    console.log('👌');
}
document.body.addEventListener('click', high5)

```

### Why are callback functions so much used in Javascript?

- split up our code into more reusable and interconnected parts.
- allows us to create abstraction.
- Abstraction means that we hide the detail of some code implementation
- above code example is abstraction of delegating the string transformation.
- callback is vital part of the Javascript Language.
