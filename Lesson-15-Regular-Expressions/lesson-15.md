### **Lesson 15: Regular Expressions in JavaScript**

#### **Introduction**
Regular Expressions (RegEx) are powerful tools for pattern matching and text manipulation. They allow you to search, extract, and manipulate strings efficiently. This lesson dives into the syntax and use of regular expressions in JavaScript.

---

#### **1. Basics of Regular Expressions**
A regular expression is a sequence of characters that define a search pattern.

**Syntax:**
```javascript
const regex = /pattern/flags;
```

- **Pattern**: The sequence to match.
- **Flags**: Options that modify the behavior (e.g., `g` for global, `i` for case-insensitive).

---

#### **2. Common Flags**
1. `g` - Global match (finds all matches instead of stopping after the first).
2. `i` - Case-insensitive match.
3. `m` - Multiline matching.

**Example:**
```javascript
const text = "Hello hello HELLO";
const regex = /hello/gi;
console.log(text.match(regex));
// Output: ["Hello", "hello", "HELLO"]
```

---

#### **3. Useful Methods**
1. **`test()`**: Checks if a pattern exists in a string and returns a boolean.
   ```javascript
   const regex = /world/i;
   console.log(regex.test("Hello World")); // Output: true
   ```

2. **`match()`**: Returns an array of matched values.
   ```javascript
   const regex = /[aeiou]/g;
   console.log("JavaScript".match(regex)); // Output: ["a", "a", "i"]
   ```

3. **`replace()`**: Replaces matching patterns in a string.
   ```javascript
   const regex = /world/i;
   console.log("Hello World".replace(regex, "JavaScript"));
   // Output: Hello JavaScript
   ```

4. **`split()`**: Splits a string based on a regular expression.
   ```javascript
   const regex = /,/;
   console.log("apple,banana,cherry".split(regex));
   // Output: ["apple", "banana", "cherry"]
   ```

---

#### **4. Special Characters**
1. **`.`** - Matches any single character.
   ```javascript
   const regex = /h.t/;
   console.log("hat hit hut".match(regex)); // Output: ["hat"]
   ```

2. **`[]`** - Matches any character inside the brackets.
   ```javascript
   const regex = /[aeiou]/g;
   console.log("JavaScript".match(regex)); // Output: ["a", "a", "i"]
   ```

3. **`^`** - Matches the start of a string.
   ```javascript
   const regex = /^hello/i;
   console.log(regex.test("Hello World")); // Output: true
   ```

4. **`$`** - Matches the end of a string.
   ```javascript
   const regex = /world$/i;
   console.log(regex.test("Hello World")); // Output: true
   ```

5. **`\d`** - Matches any digit (0-9).
   ```javascript
   const regex = /\d/g;
   console.log("Phone: 123-456".match(regex)); // Output: ["1", "2", "3", "4", "5", "6"]
   ```

6. **`\w`** - Matches any word character (alphanumeric and underscore).
   ```javascript
   const regex = /\w/g;
   console.log("Hello_123!".match(regex)); // Output: ["H", "e", "l", "l", "o", "_", "1", "2", "3"]
   ```

---

#### **5. Grouping and Quantifiers**
1. **Grouping**: Use parentheses `()` to group patterns.
   ```javascript
   const regex = /(cat|dog)/;
   console.log(regex.test("I have a dog.")); // Output: true
   ```

2. **Quantifiers**:
   - `*` - Matches 0 or more occurrences.
   - `+` - Matches 1 or more occurrences.
   - `?` - Matches 0 or 1 occurrence.
   - `{n}` - Matches exactly `n` occurrences.
   - `{n,}` - Matches `n` or more occurrences.
   - `{n,m}` - Matches between `n` and `m` occurrences.

   **Example:**
   ```javascript
   const regex = /\d{3}/g;
   console.log("123 456 78".match(regex)); // Output: ["123", "456"]
   ```

---

#### **6. Escape Characters**
Use `\` to escape special characters.
```javascript
const regex = /\$/g;
console.log("Total: $100".match(regex)); // Output: ["$"]
```

---

#### **7. Practical Examples**
1. **Email Validation:**
   ```javascript
   const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
   console.log(emailRegex.test("example@email.com")); // Output: true
   ```

2. **Phone Number Validation:**
   ```javascript
   const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
   console.log(phoneRegex.test("123-456-7890")); // Output: true
   ```

3. **Extract Numbers:**
   ```javascript
   const regex = /\d+/g;
   console.log("Order #12345".match(regex)); // Output: ["12345"]
   ```

---

#### **Summary**
In this lesson, we explored:
- The basics of regular expressions.
- Methods like `test`, `match`, `replace`, and `split`.
- Special characters, grouping, and quantifiers.
- Practical examples like email and phone validation.
