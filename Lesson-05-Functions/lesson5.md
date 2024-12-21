## Lesson 5: Functions in JavaScript

Functions are one of the most important building blocks in JavaScript. They allow you to write reusable, organized, and modular code. This lesson will explore how to create and use functions effectively.

### **What Are Functions?**

A function is a block of code designed to perform a particular task. You define a function once, and then you can call it (execute it) multiple times.

## **Defining Functions**

There are multiple ways to define functions in JavaScript:

##### **Function Declaration**
A function declared with the `function` keyword.
```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Calling the function
greet("Alice");
greet("Bob");
```

##### **Function Expression**
A function assigned to a variable.
```javascript
const add = function (a, b) {
    return a + b;
};

console.log(add(2, 3)); // Output: 5
```

##### **Arrow Function**
A more concise way to write functions introduced in ES6.
```javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // Output: 20
```
## **Parameters and Arguments**

- **Parameters** are placeholders in the function definition.
- **Arguments** are the actual values passed when calling the function.

Example:
```javascript
function introduce(name, age) {
    console.log(`My name is ${name} and I am ${age} years old.`);
}

introduce("Charlie", 25); // Output: My name is Charlie and I am 25 years old.
```
## **Default Parameters**

Functions can have default parameter values.
```javascript
function greet(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}

greet(); // Output: Welcome, Guest!
greet("Alice"); // Output: Welcome, Alice!
```

## **Return Values**

Functions can return values to the caller.
```javascript
function square(num) {
    return num * num;
}

const result = square(4);
console.log(result); // Output: 16
```
## **Function Scope**

Functions have their own scope, meaning variables declared inside a function are not accessible outside of it.
```javascript
function showMessage() {
    const message = "Hello!";
    console.log(message);
}

showMessage(); // Output: Hello!
// console.log(message); // Error: message is not defined
```
## **Higher-Order Functions**

Functions that take other functions as arguments or return functions as results.
```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```
## **Anonymous Functions**

Functions without a name, often used as arguments to other functions.
```javascript
setTimeout(function () {
    console.log("This message appears after 2 seconds");
}, 2000);
```
## Summary

- Functions are reusable blocks of code that perform specific tasks.
- You can define functions using declarations, expressions, or arrow functions.
- Functions can take parameters, return values, and have their own scope.
- Higher-order functions and anonymous functions are powerful tools for dynamic programming.
