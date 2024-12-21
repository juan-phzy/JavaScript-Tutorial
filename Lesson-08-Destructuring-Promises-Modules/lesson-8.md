### Lesson 8: Advanced JavaScript Concepts and ES6+ Features

In this lesson, we’ll explore more advanced JavaScript concepts that will enhance your ability to write clean, efficient, and modern code. This includes **destructuring**, **spread/rest operators**, **promises and async/await**, and **modules**. These concepts are critical for building scalable and maintainable applications.

---

#### Destructuring

Destructuring allows you to extract values from arrays or properties from objects and assign them to variables in a single statement.

**Example: Array Destructuring**
```javascript
const coordinates = [40.7128, -74.0060];
const [latitude, longitude] = coordinates;

console.log(latitude, longitude); 
// Output: 40.7128 -74.0060
```

**Example: Object Destructuring**
```javascript
const foodTruck = { name: "Taco Fiesta", location: "Austin", rating: 4.5 };
const { name, location, rating } = foodTruck;

console.log(`${name} is in ${location} with a rating of ${rating}.`);
// Output: Taco Fiesta is in Austin with a rating of 4.5
```

---

#### Spread and Rest Operators

The **spread operator (`...`)** allows you to expand arrays or objects, while the **rest operator (`...`)** collects multiple elements into an array.

**Example: Spread**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

console.log(combined);
// Output: [1, 2, 3, 4, 5, 6]

const truckDetails = { name: "Taco Fiesta", location: "Austin" };
const additionalDetails = { rating: 4.5, isOpen: true };

const fullDetails = { ...truckDetails, ...additionalDetails };
console.log(fullDetails);
// Output: { name: 'Taco Fiesta', location: 'Austin', rating: 4.5, isOpen: true }
```

**Example: Rest**
```javascript
function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

console.log(calculateTotal(5, 10, 15)); 
// Output: 30
```

---

#### Promises and Async/Await

JavaScript uses **Promises** and **async/await** to handle asynchronous operations like API calls or file reads.

**Example: Promises**
```javascript
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
};

fetchData().then((data) => console.log(data)).catch((error) => console.error(error));
// Output after 2 seconds: Data fetched successfully!
```

**Example: Async/Await**
```javascript
const fetchData = async () => {
    try {
        const data = await new Promise((resolve) =>
            setTimeout(() => resolve("Data fetched successfully!"), 2000)
        );
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

fetchData();
// Output after 2 seconds: Data fetched successfully!
```

---

#### ES6+ Modules

Modules allow you to split your code into reusable files and import/export them as needed.

**Exporting a Module**
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

**Importing a Module**
```javascript
// main.js
import { add, subtract } from "./math.js";

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

**Default Exports**
```javascript
// utils.js
export default function greet(name) {
    return `Hello, ${name}!`;
}

// main.js
import greet from "./utils.js";
console.log(greet("Juan")); 
// Output: Hello, Juan!
```

---

### Exercises

1. **Destructuring Exercise**: Create an object representing a food truck with properties like `name`, `categories`, and `location`. Use destructuring to extract its values.
2. **Spread/Rest Exercise**: Combine two arrays of food categories using the spread operator. Write a function that takes multiple food truck names and returns a string listing them all, using the rest operator.
3. **Promises Exercise**: Simulate fetching truck data with a Promise. Log success or error messages based on the promise resolution.
4. **Async/Await Exercise**: Write an async function to fetch a list of trucks from a mock API. Use `await` to log the truck data after a delay.
