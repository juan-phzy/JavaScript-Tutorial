### Lesson 24: Working with Data in JavaScript

JavaScript offers a wide array of tools to manipulate, process, and manage data effectively. Understanding these tools is essential for working with structured and unstructured data in applications. This lesson focuses on advanced data manipulation techniques, including handling large data sets, using specialized data structures, and working with JSON.

---

### **1. Manipulating and Processing Large Data Sets**

#### Using Array Methods for Large Data
JavaScript’s `map`, `filter`, and `reduce` are powerful tools for data manipulation. However, for extremely large datasets, ensure operations are efficient.

**Example:**
```javascript
const data = Array.from({ length: 1000000 }, (_, i) => i);

// Find all even numbers
const evenNumbers = data.filter(num => num % 2 === 0);
console.log(evenNumbers.length); // Outputs: 500000
```

#### Using Web Workers for Heavy Computations
For computationally expensive tasks, Web Workers can prevent the UI thread from freezing.

**Example:**
```javascript
// In a Web Worker file (worker.js)
onmessage = function (e) {
  const result = e.data.filter(num => num % 2 === 0);
  postMessage(result);
};

// In the main script
const worker = new Worker("worker.js");
worker.postMessage([1, 2, 3, 4, 5]);

worker.onmessage = function (e) {
  console.log("Even numbers:", e.data); // Outputs: [2, 4]
};
```

---

### **2. Specialized Data Structures**

#### `Map` and `Set`
- `Map`: Efficient key-value storage, allowing any type of keys.
- `Set`: Stores unique values.

**Example:**
```javascript
const truckMap = new Map();
truckMap.set("Taco Truck", { location: "Main Street" });
truckMap.set("Burger Bliss", { location: "Elm Street" });

console.log(truckMap.get("Taco Truck")); // { location: "Main Street" }

const visitedTrucks = new Set();
visitedTrucks.add("Taco Truck");
visitedTrucks.add("Burger Bliss");
visitedTrucks.add("Taco Truck"); // Duplicates ignored

console.log(visitedTrucks.size); // 2
```

#### `WeakMap` and `WeakSet`
These structures allow garbage collection of unused objects, making them ideal for temporary data.

**Example:**
```javascript
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "temporary data");

console.log(weakMap.has(obj)); // true
```

---

### **3. JSON Handling**

#### Parsing and Stringifying JSON
JavaScript uses `JSON.parse` and `JSON.stringify` to handle JSON data.

**Example:**
```javascript
const truckData = '{"name": "Taco Truck", "rating": 4.5}';
const parsedData = JSON.parse(truckData);
console.log(parsedData.name); // Taco Truck

const stringifiedData = JSON.stringify(parsedData);
console.log(stringifiedData); // {"name":"Taco Truck","rating":4.5}
```

#### Handling Nested JSON Data
Use chaining or optional chaining for accessing nested JSON objects safely.

**Example:**
```javascript
const data = {
  truck: {
    name: "Pizza Paradise",
    menu: { items: ["Pepperoni Pizza", "Cheese Pizza"] },
  },
};

console.log(data?.truck?.menu?.items[0]); // Pepperoni Pizza
```

---

### **4. Working with Immutable Data**

Immutable data structures prevent accidental modifications, which is especially useful for state management in applications.

**Example Using `Object.freeze`:**
```javascript
const truck = Object.freeze({
  name: "Taco Truck",
  menu: ["Tacos", "Burritos"],
});

truck.name = "Burger Bliss"; // Ignored
console.log(truck.name); // Taco Truck
```

---

### **5. Common Pitfalls and Best Practices**

1. **Large Arrays**: Avoid iterating over large arrays multiple times; chain operations where possible.
2. **JSON Size**: Keep JSON payloads small for better performance.
3. **Memory Usage**: Use `WeakMap` and `WeakSet` for ephemeral data to avoid memory leaks.

---

### **6. Practical Applications**

1. **Real-Time Filtering**: Use `filter` to show relevant results as users search.
2. **Efficient Caching**: Use `Map` to store and retrieve truck details by ID.
3. **State Management**: Use immutable objects to maintain application state consistently.
4. **JSON APIs**: Use `JSON.parse` to process incoming data from APIs.

---

### **Key Takeaways**

- Understand the use cases for `Map`, `Set`, `WeakMap`, and `WeakSet`.
- Use efficient array methods like `filter` and `reduce` for data processing.
- Handle JSON securely and efficiently with `JSON.parse` and `JSON.stringify`.
- Employ immutability to protect application state.
