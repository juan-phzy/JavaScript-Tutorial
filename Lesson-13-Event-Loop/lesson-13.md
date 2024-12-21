### **Lesson 13: JavaScript Event Loop and Concurrency**

#### **Introduction**
JavaScript is a single-threaded language. This means it executes one operation at a time. Despite this, JavaScript is capable of handling asynchronous tasks efficiently through the **event loop**. Understanding how the event loop works is crucial to mastering JavaScript's concurrency model.

---

#### **1. The Call Stack**
The call stack is a data structure that keeps track of function calls. When a function is called, it’s added to the stack. Once it completes, it’s removed.

**Code Example:**
```javascript
function first() {
    console.log("First function");
}

function second() {
    console.log("Second function");
}

first();
second();
// Output:
// First function
// Second function
```

**Explanation:**
- `first` is pushed onto the stack.
- `console.log("First function")` executes and `first` is popped off.
- `second` is pushed onto the stack and follows the same process.

---

#### **2. The Web APIs (Browser Environment)**
When asynchronous operations like `setTimeout` or `fetch` are called, they don’t block the call stack. Instead, they’re sent to the browser's **Web APIs**, allowing the stack to proceed with other tasks.

**Code Example:**
```javascript
console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
}, 1000);

console.log("End");
// Output:
// Start
// End
// Inside Timeout
```

**Explanation:**
- `setTimeout` is sent to the Web API.
- `console.log("End")` executes immediately after.
- Once the timer completes, the callback is added to the queue.

---

#### **3. The Event Loop**
The event loop continuously checks the call stack. If it’s empty, it pushes callbacks from the **task queue** to the stack.

**Key Terms:**
- **Task Queue**: Stores callbacks from asynchronous operations like `setTimeout`.
- **Microtask Queue**: Handles tasks from promises, `process.nextTick`, etc., and has higher priority than the task queue.

**Code Example:**
```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
// Output:
// Start
// End
// Promise
// Timeout
```

**Explanation:**
- `setTimeout` is added to the task queue.
- `Promise` is added to the microtask queue, which is processed before the task queue.

---

#### **4. Microtasks and Macrotasks**
Microtasks (e.g., promises) are executed before macrotasks (e.g., `setTimeout`).

**Code Example:**
```javascript
console.log("Start");

setTimeout(() => console.log("Macrotask"), 0);

Promise.resolve().then(() => console.log("Microtask"));

console.log("End");
// Output:
// Start
// End
// Microtask
// Macrotask
```

---

#### **5. Practical Implications**
Knowing how the event loop works helps you optimize asynchronous code and avoid bugs.

**Code Example:**
```javascript
setTimeout(() => console.log("Timeout 1"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => {
    console.log("Promise 2");
    setTimeout(() => console.log("Timeout 2"), 0);
});
console.log("End");
// Output:
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2
```

---

### **Summary**
This lesson covered:
- The call stack and its role in executing synchronous code.
- How the browser handles asynchronous tasks using Web APIs.
- The event loop and its coordination between the call stack and task/microtask queues.
- The priority difference between microtasks and macrotasks.

Shall we dive deeper into specific applications of the event loop, or proceed to the next topic?