### Lesson 9: Deep Dive into Promises

Promises are a fundamental part of modern JavaScript, enabling better management of asynchronous code. In this lesson, we will cover **what Promises are**, how they work, and explore their various parts and methods, including chaining, error handling, and advanced techniques.

---

### What is a Promise?

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to attach callbacks to handle the outcome, avoiding the complexity of deeply nested callbacks (commonly known as "callback hell").

---

### Promise Lifecycle

A Promise can be in one of three states:

1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

---

### Creating a Promise

You create a Promise using the `Promise` constructor, which takes a function (called the executor) with two arguments: `resolve` (for success) and `reject` (for failure).

**Example:**
```javascript
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed.");
    }
});

console.log(myPromise);
// Output: Promise { <pending> }
```

---

### Consuming a Promise

Once a Promise is created, you handle its result using `.then()` for fulfillment and `.catch()` for rejection.

**Example:**
```javascript
myPromise
    .then((message) => {
        console.log(message); // Output: The operation was successful!
    })
    .catch((error) => {
        console.error(error); // Output: The operation failed.
    });
```

---

### Chaining Promises

You can chain multiple `.then()` calls to handle sequential asynchronous operations. Each `.then()` can return a value or a new Promise.

**Example:**
```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData
    .then((data) => {
        console.log(data); // Output: Data fetched
        return "Processing data";
    })
    .then((processMessage) => {
        console.log(processMessage); // Output: Processing data
        return "Data processed";
    })
    .then((finalMessage) => {
        console.log(finalMessage); // Output: Data processed
    })
    .catch((error) => {
        console.error("Error:", error);
    });
```

---

### Catching Errors

The `.catch()` method is used to handle errors in a Promise chain. Errors can occur either in the executor function or during any `.then()` call.

**Example:**
```javascript
const riskyOperation = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed.");
    }
});

riskyOperation
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error); // Handles any error in the chain
    });
```

---

### `.finally()` Method

The `.finally()` method is called regardless of whether the Promise was resolved or rejected. It is commonly used for cleanup tasks.

**Example:**
```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => reject("Fetch failed"), 1000);
});

fetchData
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
    .finally(() => console.log("Fetch operation complete"));
// Output:
// Fetch failed
// Fetch operation complete
```

---

### Combining Promises with `Promise.all`

The `Promise.all()` method takes an array of Promises and resolves when all of them are fulfilled. If any Promise is rejected, the whole operation fails.

**Example:**
```javascript
const promise1 = Promise.resolve("First task done");
const promise2 = Promise.resolve("Second task done");
const promise3 = Promise.resolve("Third task done");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results); // Output: ["First task done", "Second task done", "Third task done"]
    })
    .catch((error) => {
        console.error("One of the promises failed:", error);
    });
```

---

### `Promise.allSettled`

Unlike `Promise.all`, the `Promise.allSettled()` method waits for all Promises to settle (either resolved or rejected) and returns their results.

**Example:**
```javascript
const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Failure");
const promise3 = Promise.resolve("Another success");

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    console.log(results);
    // Output: 
    // [
    //   { status: "fulfilled", value: "Success" },
    //   { status: "rejected", reason: "Failure" },
    //   { status: "fulfilled", value: "Another success" }
    // ]
});
```

---

### `Promise.race`

The `Promise.race()` method returns the result of the first Promise that settles (either resolved or rejected).

**Example:**
```javascript
const slowPromise = new Promise((resolve) =>
    setTimeout(() => resolve("Slow promise resolved"), 3000)
);
const fastPromise = new Promise((resolve) =>
    setTimeout(() => resolve("Fast promise resolved"), 1000)
);

Promise.race([slowPromise, fastPromise]).then((result) => {
    console.log(result); // Output: Fast promise resolved
});
```

---

### Exercises

1. **Basic Promise**: Create a Promise that resolves after 2 seconds with the message "Hello, World!".
2. **Error Handling**: Simulate a failed API call using a Promise that rejects after 1 second.
3. **Chaining**: Write a function that chains three Promises, each resolving with a different message after a delay.
4. **Promise.all**: Create three Promises and use `Promise.all` to log their results once all are resolved.
5. **Promise.race**: Simulate a race between two API calls, one fast and one slow, and log the result of the faster call.