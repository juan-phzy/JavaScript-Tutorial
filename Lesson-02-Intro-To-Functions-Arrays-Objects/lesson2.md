## JavaScript Basics: Lesson 2 – Functions, Arrays, and Objects

#### Overview:
In this lesson, we will build upon the basics from Lesson 1 and dive deeper into JavaScript with functions, arrays, and objects. By the end of this lesson, you will be able to use these foundational concepts to write more dynamic and reusable code.

## **Functions**
Functions allow us to write reusable blocks of code. There are multiple ways to define functions in JavaScript.

#### **Function Declaration**
A named function that can be reused.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

#### **Function Expression**
An anonymous function assigned to a variable.

```javascript
const greet = function(name) {
  return `Hi, ${name}!`;
};

console.log(greet("Bob")); // Output: Hi, Bob!
```

#### **Arrow Functions**
A modern, shorter syntax for writing functions.

```javascript
const greet = (name) => `Hey, ${name}!`;

console.log(greet("Charlie")); // Output: Hey, Charlie!
```

## **Arrays**
An array is a collection of items stored in a single variable.

#### **Creating an Array**
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Cherry' ]
```

#### **Accessing Array Elements**
Use an index (starting from 0) to access elements.

```javascript
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Cherry
```

#### **Modifying Arrays**
```javascript
fruits.push("Mango"); // Adds to the end
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Cherry', 'Mango' ]

fruits.pop(); // Removes the last element
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Cherry' ]

fruits[1] = "Blueberry"; // Updates an element
console.log(fruits); // Output: [ 'Apple', 'Blueberry', 'Cherry' ]
```

#### **Iterating Over Arrays**
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num); // Logs each number
});

const doubled = numbers.map((num) => num * 2); // Creates a new array
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

## **Objects**
Objects are collections of key-value pairs.

#### **Creating an Object**
```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
};

console.log(person); 
// Output: { firstName: 'John', lastName: 'Doe', age: 30, isEmployed: true }
```

#### **Accessing Object Properties**
```javascript
console.log(person.firstName); // Output: John
console.log(person["age"]);    // Output: 30
```

#### **Modifying Objects**
```javascript
person.age = 31; // Updates age
console.log(person.age); // Output: 31

person.isMarried = false; // Adds a new property
console.log(person); 
// Output: { firstName: 'John', lastName: 'Doe', age: 31, isEmployed: true, isMarried: false }
```

#### **Iterating Over Objects**
```javascript
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// firstName: John
// lastName: Doe
// age: 31
// isEmployed: true
// isMarried: false
```

## **Combining Arrays and Objects**
You can store objects in arrays or arrays in objects.

#### **Array of Objects**
```javascript
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

console.log(people[1].name); // Output: Bob
```

#### **Object with Arrays**
```javascript
const library = {
  books: ["1984", "To Kill a Mockingbird", "The Great Gatsby"],
  location: "Downtown",
};

console.log(library.books[2]); // Output: The Great Gatsby
```

## Understanding Check:
1. Create a function that takes two numbers and returns their product.
2. Write an array of five colors and log each color to the console.
3. Create an object for a car with properties like brand, model, and year. Add a new property for the color and log the updated object.
4. Combine arrays and objects: Create an object that contains a name and an array of favorite movies. Log one of the movies.
