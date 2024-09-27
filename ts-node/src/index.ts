import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "./generics/generics";

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject("Hello, world!");

console.log(genericFunctionArrow(3.1416).toFixed(2));
console.log(genericFunctionArrow("Hello World!").toUpperCase());
console.log(genericFunctionArrow(new Date()).getDate());
