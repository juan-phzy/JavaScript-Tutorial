### **Lesson 14: JavaScript Error Handling**

#### **Introduction**
Errors are inevitable in programming. JavaScript provides mechanisms to handle errors gracefully and ensure your code remains robust. This lesson dives into error types, error handling techniques, and best practices.

---

#### **1. Types of Errors**
JavaScript errors can be categorized into the following:

1. **Syntax Error**: Occurs when the code has a syntax issue.
   ```javascript
   console.log("Missing parenthesis";
   // SyntaxError: Unexpected token ';'
   ```

2. **Reference Error**: Happens when a variable or function is not defined.
   ```javascript
   console.log(undeclaredVariable);
   // ReferenceError: undeclaredVariable is not defined
   ```

3. **Type Error**: Occurs when a value is not of the expected type.
   ```javascript
   let num = 5;
   num.toUpperCase();
   // TypeError: num.toUpperCase is not a function
   ```

4. **Range Error**: Happens when a value is outside the allowable range.
   ```javascript
   let arr = new Array(-1);
   // RangeError: Invalid array length
   ```

5. **Custom Errors**: You can define and throw your own errors.
   ```javascript
   throw new Error("Custom error");
   ```

---

#### **2. The `try...catch` Statement**
The `try...catch` block lets you handle errors gracefully.

**Basic Example:**
```javascript
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.error("An error occurred:", error.message);
}
// Output: Infinity (No error because division by zero is valid in JavaScript)
```

**With Intentional Error:**
```javascript
try {
    let result = someUndefinedFunction();
} catch (error) {
    console.error("Error caught:", error.message);
}
// Output: Error caught: someUndefinedFunction is not defined
```

---

#### **3. The `finally` Block**
The `finally` block executes code after `try` or `catch`, regardless of the outcome.

**Example:**
```javascript
try {
    let result = 5 / 0;
    console.log(result);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("This runs no matter what.");
}
// Output:
// Infinity
// This runs no matter what.
```

---

#### **4. Throwing Errors**
You can use `throw` to generate custom errors.

**Example:**
```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message);
}
// Output: Division by zero is not allowed
```

---

#### **5. Handling Asynchronous Errors**
Errors in asynchronous code require different handling.

**With Promises:**
```javascript
Promise.resolve()
    .then(() => {
        throw new Error("Something went wrong!");
    })
    .catch((error) => {
        console.error("Caught in promise:", error.message);
    });
// Output: Caught in promise: Something went wrong!
```

**With `async/await`:**
```javascript
async function fetchData() {
    try {
        let response = await fetch("invalid-url");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Async error:", error.message);
    }
}

fetchData();
// Output: Async error: Failed to fetch
```

---

#### **6. Best Practices for Error Handling**
1. Always handle expected errors, like invalid user input or missing files.
2. Use custom error messages for clarity.
3. Avoid generic catch blocks; log the error details for debugging.
4. Combine `try...catch` with validation to minimize unnecessary errors.
5. Never expose sensitive information (like stack traces) in production.

---

#### **Summary**
In this lesson, we covered:
- Types of errors in JavaScript.
- The `try...catch` mechanism for error handling.
- The role of the `finally` block.
- How to throw custom errors.
- Techniques for handling asynchronous errors.
