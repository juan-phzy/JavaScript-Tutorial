## Lesson 3: Overview and Expansion on JavaScript Basics

### Overview of Concepts So Far

1. **What is JavaScript?**
   - JavaScript is a **versatile language** used for web & app development. It's both a **programming** and **scripting language**, meaning it can handle both client-side interactions and automate repetitive tasks.

2. **Data Types in JavaScript**
   - **Primitive Types**: Numbers, Strings, Booleans, `null`, `undefined`, and Symbols.
   - **Non-Primitive Type**: Objects (includes Arrays, Functions, Dates, etc.).

   Example:
   ```javascript
   const number = 42; // Primitive type
   const obj = { key: "value" }; // Non-primitive type
   ```

3. **Variables**
   - Declared using `let`, `const`, or `var`.
   - Prefer `let` and `const` for modern JavaScript. Use `const` for values that won't change.

   Example:
   ```javascript
   let name = "Alice";
   const age = 25;
   ```

4. **Strings**
   - Strings are sequences of characters enclosed in quotes.
   - Common operations include concatenation, accessing characters, and manipulating case.

   Example:
   ```javascript
   const greeting = "Hello, " + "World!";
   console.log(greeting.toUpperCase()); // HELLO, WORLD!
   ```

5. **Arrays**
   - Arrays are **built-in objects** in JavaScript used to store ordered collections of data.
   - They come with methods for adding, removing, and transforming elements.

   Example:
   ```javascript
   const fruits = ["apple", "banana", "cherry"];
   fruits.push("date");
   console.log(fruits); // ["apple", "banana", "cherry", "date"]
   ```

6. **The Caveat About Arrays**
   - Arrays are technically objects in JavaScript.
   - They have numerical indices and inherit methods like `.push()` and `.map()` from the `Array.prototype`.
   - Example:
     ```javascript
     const arr = [1, 2, 3];
     console.log(typeof arr); // "object"
     ```

---

#### Comprehensive List of String Methods

Here’s the edited list with the return values and their types:

- `.length`: Returns the length of the string as a number.
- `.charAt(index)`: Returns the character at the specified index as a string.
- `.concat(string2, string3, ...)`: Joins multiple strings into one and returns the concatenated string.
- `.includes(substring)`: Returns a boolean indicating whether the string contains the specified substring.
- `.indexOf(substring)`: Returns the index of the first occurrence of a substring as a number, or `-1` if not found.
- `.lastIndexOf(substring)`: Returns the index of the last occurrence of a substring as a number, or `-1` if not found.
- `.slice(start, end)`: Extracts a part of the string and returns it as a new string.
- `.substring(start, end)`: Similar to `.slice()` but does not accept negative indices, returns the extracted part as a string.
- `.toLowerCase()`: Converts the string to lowercase and returns the new string.
- `.toUpperCase()`: Converts the string to uppercase and returns the new string.
- `.trim()`: Removes whitespace from both ends of the string and returns the trimmed string.
- `.split(delimiter)`: Splits the string into an array of strings based on the delimiter and returns the array.
- `.replace(substring, replacement)`: Replaces the first occurrence of the substring with a replacement and returns the updated string.
- `.replaceAll(substring, replacement)`: Replaces all occurrences of a substring with a replacement and returns the updated string.
- `.startsWith(substring)`: Returns a boolean indicating whether the string starts with the given substring.
- `.endsWith(substring)`: Returns a boolean indicating whether the string ends with the given substring.


---

#### Comprehensive List of Array Methods

Here’s the updated list with what each function returns and its return type:

- `.length`: Returns the number of elements in the array as a number.
- `.push(element)`: Adds an element to the end of the array and returns the new length of the array as a number.
- `.pop()`: Removes the last element from the array and returns the removed element, or `undefined` if the array is empty.
- `.shift()`: Removes the first element from the array and returns the removed element, or `undefined` if the array is empty.
- `.unshift(element)`: Adds an element to the beginning of the array and returns the new length of the array as a number.
- `.indexOf(element)`: Returns the first index of the element as a number, or `-1` if the element is not found.
- `.lastIndexOf(element)`: Returns the last index of the element as a number, or `-1` if the element is not found.
- `.includes(element)`: Returns a boolean indicating whether the array contains the specified element.
- `.slice(start, end)`: Extracts a part of the array without modifying the original array and returns a new array.
- `.splice(start, deleteCount, items...)`: Adds/removes elements in an array and returns an array of the removed elements.
- `.concat(array2)`: Combines two or more arrays and returns a new array.
- `.join(delimiter)`: Joins all array elements into a string and returns the resulting string.
- `.reverse()`: Reverses the array in place and returns the modified array.
- `.sort(compareFunction)`: Sorts the array in place and returns the modified array.
- `.map(callback)`: Creates a new array with the results of calling the callback on every element and returns the new array.
- `.filter(callback)`: Creates a new array with elements that pass the test in the callback and returns the new array.
- `.reduce(callback, initialValue)`: Reduces the array to a single value using a callback and returns the result, which can be of any type depending on the callback logic.
- `.find(callback)`: Returns the first element that satisfies the callback function, or `undefined` if no elements satisfy the condition.
- `.findIndex(callback)`: Returns the index of the first element that satisfies the callback as a number, or `-1` if no elements satisfy the condition.
- `.forEach(callback)`: Executes a provided function once for each array element and returns `undefined`. It is used for side effects, not for returning values.
