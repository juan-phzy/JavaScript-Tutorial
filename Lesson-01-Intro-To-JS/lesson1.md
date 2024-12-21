## JavaScript Basics: Lesson 1 – Introduction to JavaScript

#### Overview:
In this lesson, we'll cover the fundamentals of JavaScript. This is an introductory guide to help you get started with basic concepts such as variables, data types, and simple operations. By the end of this lesson, you’ll understand how to write and execute basic JavaScript code.

## **What is JavaScript?**
- JavaScript is a versatile programming language primarily used for adding interactivity to web pages.
- It runs on browsers (like Chrome, Firefox) but can also run on servers (like Node.js).

## **Basic Syntax**
#### Writing JavaScript
- You can write JavaScript:
  - Directly in the browser's console for testing.
  - Inside an HTML file using `<script>` tags.
  - In `.js` files that are executed with Node.js or linked to an HTML file.
- For the following lessons we will be using VS Code and its run and debugger functionality.

## VS Code Setup
1. Create a new folder somewhere on your system in which you would like to keep your tutorial files.
2. Create a new folder in that folder called Lesson 1 - JS Intro
3. Within this folder you will have a different .js file for each section
    - Ex: variables.js, dataTypes.js, Operators.js......
4. Make sure your vs code extensions that I recommneded on our tasks page are installed.

## **Variables in JavaScript**
Variables are used to store data.

#### **How to Declare Variables**
- In JavaScript, you can declare variables using `var`, `let`, or `const`.

```javascript
// Example of variable declarations
var name = "John";    // Using var (not recommended for modern code)
let age = 25;         // Using let (preferred for variables that change)
const country = "USA"; // Using const (for constants that don’t change)

console.log(name); // Output: John
console.log(age);  // Output: 25
console.log(country); // Output: USA
```

#### **Differences between var, let, and const**
- `var` has function scope and is outdated.
- `let` has block scope and is modern.
- `const` is also block-scoped but used for values that should not be reassigned.

## **Data Types**
JavaScript supports different types of data:

#### **Primitive Data Types**
- **String**: Text enclosed in quotes.
- **Number**: Integers or decimals.
- **Boolean**: True or false.
- **Null**: Represents "nothing."
- **Undefined**: A variable declared but not assigned a value.

```javascript
// Examples of primitive data types
let firstName = "Alice"; // String
let age = 30;            // Number
let isStudent = true;    // Boolean
let emptyValue = null;   // Null
let notAssigned;         // Undefined

console.log(typeof firstName); // Output: string
console.log(typeof age);       // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof emptyValue);// Output: object (special case for null)
console.log(typeof notAssigned); // Output: undefined
```

## **Operators**
#### Arithmetic Operators
These are used for basic math operations:

```javascript
let a = 10;
let b = 5;

console.log(a + b); // Addition: Output is 15
console.log(a - b); // Subtraction: Output is 5
console.log(a * b); // Multiplication: Output is 50
console.log(a / b); // Division: Output is 2
console.log(a % b); // Modulus: Output is 0
```

#### Comparison Operators
These compare two values and return a Boolean:

```javascript
let x = 10;
let y = 20;

console.log(x > y);  // Greater than: Output is false
console.log(x < y);  // Less than: Output is true
console.log(x == y); // Equal to: Output is false
console.log(x != y); // Not equal to: Output is true
```

#### Logical Operators
Used to combine conditions:

```javascript
let isAdult = true;
let hasTicket = false;

console.log(isAdult && hasTicket); // AND: Output is false
console.log(isAdult || hasTicket); // OR: Output is true
console.log(!isAdult);             // NOT: Output is false
```

## **Control Structures**
#### If-Else Statements
```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

#### Loops
Loops let you repeat tasks.

```javascript
// For Loop
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

// While Loop
let count = 0;
while (count < 3) {
  console.log("Count: " + count);
  count++;
}
```

## **Functions**
Functions are reusable blocks of code.

```javascript
// Example of a function
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

### Understanding Check:
1. Create a variable for your name, age, and favorite color, and log them to the console.
2. Write a function that calculates the sum of two numbers.
3. Use a loop to print numbers from 1 to 10.
