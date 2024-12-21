### **Lesson 12: Asynchronous JavaScript Deep Dive**

#### **Introduction**
Asynchronous programming allows JavaScript to perform long-running operations, like fetching data from a server, without blocking the main thread. This lesson dives deeper into the tools and techniques for handling asynchronous code effectively.

---

#### **1. Callbacks**
Callbacks are functions passed as arguments to other functions to be executed later.

**Code Example:**
```javascript
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

fetchData(() => {
    console.log("Processing data...");
});
// Output:
// Data fetched
// Processing data...
```

**Drawback of Callbacks:**
- Callback Hell: Nesting callbacks can make code hard to read and maintain.

---

#### **2. Promises**
Promises improve readability and error handling by representing the eventual completion (or failure) of an asynchronous operation.

**Code Example:**
```javascript
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
};

fetchData()
    .then((data) => {
        console.log(data);
        return "Processing data...";
    })
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
// Output:
// Data fetched
// Processing data...
```

**Promise States:**
- **Pending:** Initial state, neither fulfilled nor rejected.
- **Fulfilled:** Operation completed successfully.
- **Rejected:** Operation failed.

---

#### **3. Async/Await**
`async` and `await` provide a way to write asynchronous code that looks synchronous, improving readability.

**Code Example:**
```javascript
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
};

const processData = async () => {
    try {
        const data = await fetchData();
        console.log(data);
        console.log("Processing data...");
    } catch (error) {
        console.error(error);
    }
};

processData();
// Output:
// Data fetched
// Processing data...
```

**Key Points:**
- `await` can only be used inside an `async` function.
- Errors are caught using `try-catch`.

---

#### **4. Error Handling**
Proper error handling ensures that your application behaves predictably when things go wrong.

**Using Promises:**
```javascript
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
```

**Using Async/Await:**
```javascript
const processData = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
};
```

---

#### **5. Combining Multiple Promises**
When multiple asynchronous tasks need to run, JavaScript provides tools to handle them efficiently.

**`Promise.all`:**
Waits for all promises to resolve.
```javascript
const task1 = () => Promise.resolve("Task 1 complete");
const task2 = () => Promise.resolve("Task 2 complete");

Promise.all([task1(), task2()])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));
// Output: ["Task 1 complete", "Task 2 complete"]
```

**`Promise.race`:**
Returns the first promise to resolve or reject.
```javascript
Promise.race([task1(), task2()])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
```

---

### **Practical Example**
Fetching multiple resources from a server:
```javascript
const fetchUser = () =>
    new Promise((resolve) => setTimeout(() => resolve("User data"), 1000));
const fetchPosts = () =>
    new Promise((resolve) => setTimeout(() => resolve("Posts data"), 2000));

const fetchAllData = async () => {
    try {
        const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
        console.log(user, posts);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

fetchAllData();
// Output:
// User data
// Posts data
```

---

### Summary
This lesson covered:
- Callbacks and their limitations.
- Promises and their states.
- `async` and `await` for better readability.
- Error handling in asynchronous code.
- Managing multiple promises with `Promise.all` and `Promise.race`.
