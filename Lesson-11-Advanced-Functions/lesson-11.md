### **Lesson 11: Advanced Functions**

#### **Introduction**
Functions in JavaScript are not just blocks of code; they are first-class citizens. This means functions can be assigned to variables, passed as arguments, and returned from other functions. Advanced concepts like closures and higher-order functions leverage this flexibility.

---

#### **1. Closures**
A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.

**Code Example:**
```javascript
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

const newFunction = outerFunction("outside");
newFunction("inside");
// Output:
// Outer Variable: outside
// Inner Variable: inside
```

**Why Use Closures?**
- Encapsulation: Variables inside closures are private.
- Memory efficiency: Closures keep only the necessary variables alive.
- Practical use: Event handlers, callbacks, and stateful logic.

---

#### **2. Higher-Order Functions**
A higher-order function is a function that either takes other functions as arguments or returns a function.

**Examples of Built-In Higher-Order Functions:**
- `.map()`
- `.filter()`
- `.reduce()`

**Code Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];

// Using .map() to square each number
const squares = numbers.map((num) => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

// Using .filter() to get even numbers
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
```

---

#### **3. Function Currying**
Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

**Code Example:**
```javascript
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(3)); // 6
console.log(multiplyBy2(5)); // 10
```

**Why Use Currying?**
- Reusability: Create partially applied functions.
- Functional composition: Break down tasks into smaller units.

---

#### **4. Recursion**
Recursion is a function calling itself to solve smaller instances of the same problem.

**Code Example:**
```javascript
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

**Key Points:**
- Always define a base case to avoid infinite recursion.
- Useful for tasks like traversing trees or breaking down problems.

---

#### **5. Function Composition**
Combine multiple functions into one to process data through a pipeline.

**Code Example:**
```javascript
const add = (x) => x + 2;
const multiply = (x) => x * 3;

const compose = (f, g) => (x) => f(g(x));

const addAndMultiply = compose(multiply, add);
console.log(addAndMultiply(5)); // (5 + 2) * 3 = 21
```

---

### Summary
In this lesson, we explored the power of JavaScript functions:
- **Closures** provide private state.
- **Higher-order functions** enable reusable logic.
- **Currying** breaks down multi-argument functions.
- **Recursion** handles nested or iterative problems elegantly.
- **Function composition** creates pipelines for cleaner code.
