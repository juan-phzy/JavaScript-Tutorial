## Lesson 4: Control Flow and Loops in JavaScript

In this lesson, we will learn about how JavaScript allows us to control the flow of our code with conditionals and loops. These tools enable us to write logic-based programs that make decisions and perform repetitive tasks.

## **Control Flow with Conditionals**

Conditionals allow JavaScript programs to make decisions based on specific conditions.

##### **`if`, `else if`, `else`**
- Used to execute blocks of code based on a condition.

Example:
```javascript
const age = 18;

if (age < 18) {
    console.log("You are a minor.");
} else if (age === 18) {
    console.log("You just became an adult!");
} else {
    console.log("You are an adult.");
}
```

##### **`switch`**
- Best used when comparing a variable against multiple possible values.

Example:
```javascript
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("End of the work week!");
        break;
    default:
        console.log("It's a regular day.");
}
```

## **Loops for Repetition**

Loops allow us to execute a block of code multiple times.

##### **`for` Loop**
- Executes a block of code a specific number of times.

Example:
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}
```

##### **`while` Loop**
- Executes a block of code as long as the condition is `true`.

Example:
```javascript
let count = 1;

while (count <= 5) {
    console.log(`Count: ${count}`);
    count++;
}
```

##### **`do...while` Loop**
- Executes a block of code at least once before checking the condition.

Example:
```javascript
let num = 0;

do {
    console.log(`Number: ${num}`);
    num++;
} while (num < 5);
```

##### **`for...of` Loop**
- Iterates over iterable objects like arrays.

Example:
```javascript
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

##### **`for...in` Loop**
- Iterates over the keys (or indices) of an object or array.

Example:
```javascript
const person = { name: "Alice", age: 25 };

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

---

#### **Break and Continue**

These keywords modify the behavior of loops.

##### **`break`**
- Exits the loop entirely.

Example:
```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) break; // Exit the loop when i equals 5
    console.log(i);
}
```

##### **`continue`**
- Skips the current iteration and moves to the next.

Example:
```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // Skip the iteration when i equals 3
    console.log(i);
}
```

## Summary

- Use conditionals (`if`, `else`, `switch`) to make decisions in your program.
- Use loops (`for`, `while`, `do...while`, `for...of`, `for...in`) to execute repetitive tasks efficiently.
- `break` and `continue` help you control the flow within loops.
