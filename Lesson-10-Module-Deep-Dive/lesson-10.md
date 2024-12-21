### Lesson 10: Deep Dive into Modules and Default Exports

In modern JavaScript, **modules** are used to structure code into reusable, self-contained pieces. Modules make it easier to manage dependencies, organize code, and avoid polluting the global namespace. This lesson explores modules in depth and explains the reasoning behind **default exports**.

---

### What Are Modules?

A **module** is simply a JavaScript file that exports code (functions, variables, objects, etc.) that can be reused in other files. Modules provide a way to split functionality into separate files, which promotes **code reusability** and **separation of concerns**.

---

### Types of Exports

Modules support two main types of exports:

1. **Named Exports**: Export multiple values from a file using their names.
2. **Default Exports**: Export a single value or functionality per file.

---

### Named Exports

Named exports allow you to export multiple items from a file. These items must be imported using their exact names.

**Example:**

**math.js**
```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

**app.js**
```javascript
import { add, subtract } from './math.js';

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 3)); // Output: 2
```

Named exports are great when a module contains multiple functionalities, and you want to expose all or some of them to other files.

---

### Default Exports

Default exports are used when a module has **one primary functionality**. Unlike named exports, the name of the import does not have to match the name of the export.

**Example:**

**calculator.js**
```javascript
export default function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            throw new Error('Invalid operator');
    }
}
```

**app.js**
```javascript
import calculate from './calculator.js';

console.log(calculate(4, 2, '+')); // Output: 6
console.log(calculate(10, 5, '-')); // Output: 5
```

Default exports are helpful for defining a module's main purpose or behavior.

---

### Why Use Default Exports?

1. **Simplicity for Single Export**:
   - If a module's primary function is to perform one task, a default export makes the intent clear.
   - Example: A file handling authentication might have `export default authenticate`.

2. **Flexible Import Names**:
   - You can rename a default import to suit your context.
   - Example:
     ```javascript
     import auth from './auth.js';
     import login from './auth.js'; // Both are valid and refer to the same export
     ```

3. **Cleaner Syntax**:
   - Default exports eliminate the need to wrap everything in curly braces.
   - Example: `import axios from 'axios';` vs. `import { axios } from 'axios';`.

4. **Consistency for Single Responsibility**:
   - Default exports promote a clear **single responsibility** for a module, ensuring the file only focuses on one piece of functionality.

---

### Combining Named and Default Exports

You can mix default and named exports in the same module, but use this approach sparingly to avoid confusion.

**Example:**

**utils.js**
```javascript
export const greet = (name) => `Hello, ${name}`;
export default function sum(a, b) {
    return a + b;
}
```

**app.js**
```javascript
import sum, { greet } from './utils.js';

console.log(sum(3, 4)); // Output: 7
console.log(greet('John')); // Output: Hello, John
```

---

### Why Not Always Use Default Exports?

1. **Ambiguity**:
   - Default exports don't enforce a consistent name across the codebase, leading to potential confusion when collaborating in teams.

2. **Refactoring Challenges**:
   - Renaming or identifying a default export in a large project can be harder than working with named exports.

3. **Tree Shaking**:
   - Named exports are more efficient with **tree shaking**, a technique used by bundlers like Webpack to remove unused code.

---

### Practical Use Cases

1. **Default Export**:
   - For modules with a single focus, like a main function or class (e.g., an API client or a utility function).

   **Example:**
   ```javascript
   export default class HttpClient { ... }
   ```

2. **Named Export**:
   - For modules with multiple utilities or constants (e.g., math operations or configurations).

   **Example:**
   ```javascript
   export const PI = 3.14;
   export function calculateArea(radius) { ... }
   ```

3. **Combination**:
   - When you want to provide a primary functionality and supplementary helpers.

   **Example:**
   ```javascript
   export default function initApp() { ... }
   export const version = '1.0.0';
   ```

---

### Exercises

1. **Basic Import/Export**:
   - Create a module `greetings.js` with two named exports: `sayHello` and `sayGoodbye`. Import and use them in another file.

2. **Default Export**:
   - Write a module `converter.js` with a default export that converts Fahrenheit to Celsius.

3. **Combined Export**:
   - Create a module `shapes.js` with a default export `calculateCircleArea` and a named export `PI`.

4. **Refactor**:
   - Refactor a file with multiple named exports into a combination of named and default exports.
