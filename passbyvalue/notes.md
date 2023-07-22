## Explanation

When we pass a primitive type as an argument on a function, the function makes a copy of the original value, and
works with it.

When we pass an object as an argument on a function, the function makes a copy of the reference that points to the place of the memory where the object is stored. This copy is a value itself, is not a reference. Through this value, the original object can be modified from inside of a function.

## Summary

- In programming languages, Arguments can be passed by value, or passed by reference.
- JavaScript works only passing by value.
- When we pass primitive values, the function works with a value, which is a copy of the original value.
- When we pass an object, the function works with a value, which is a copy of the reference that address to the spot in the memory where the original object is in the memory (still is not a reference).
