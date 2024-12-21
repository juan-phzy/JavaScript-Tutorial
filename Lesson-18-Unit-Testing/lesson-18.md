### Lesson 18: Unit Testing and Test-Driven Development (TDD)

In this lesson, we’ll focus on **Unit Testing** and **Test-Driven Development (TDD)** in JavaScript, which are essential for building reliable, maintainable, and bug-free applications. By writing tests for our code, we can ensure that individual components work as expected, catch bugs early, and simplify future modifications.

---

### **Key Concepts**
1. **Unit Testing**
   - **What it is**: Testing individual pieces of code (functions, methods, or components) to ensure they behave correctly.
   - **Why it matters**: Helps identify bugs early, improves code quality, and acts as documentation for how code is supposed to work.

2. **Test-Driven Development (TDD)**
   - **What it is**: A development methodology where you write tests first, then write code to pass those tests.
   - **Workflow**:
     1. Write a failing test (Red).
     2. Write the minimal code needed to pass the test (Green).
     3. Refactor the code while keeping tests green.

---

### **Using a Testing Library**
**Jest** is a popular JavaScript testing library. It is simple, fast, and integrates well with most JavaScript projects.

---

### **Example: Testing a Function**
Let’s write a simple function and test it.

**Function:**
```javascript
// utils/math.js
export function add(a, b) {
    return a + b;
}
```

**Test:**
```javascript
// tests/math.test.js
import { add } from '../utils/math';

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds -1 + 1 to equal 0', () => {
    expect(add(-1, 1)).toBe(0);
});
```

**Running the Test:**
```bash
npx jest
```

---

### **Mocking and Spies**
Mocking allows you to replace complex dependencies with simplified versions for testing.

**Example: Mocking a Fetch Call**
```javascript
// utils/api.js
export async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

// tests/api.test.js
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ data: 'test data' }),
    })
);

import { fetchData } from '../utils/api';

test('fetchData fetches and returns data', async () => {
    const data = await fetchData('https://example.com/api');
    expect(data).toEqual({ data: 'test data' });
    expect(fetch).toHaveBeenCalledWith('https://example.com/api');
});
```

---

### **Writing Testable Code**
- **Avoid Side Effects**: Write pure functions whenever possible.
- **Use Dependency Injection**: Pass dependencies to your functions rather than importing them directly.
- **Keep Functions Small**: Easier to test.

---

### **Benefits of Unit Testing**
- **Early Bug Detection**: Catch issues before they become expensive to fix.
- **Refactor Safely**: Ensure existing functionality isn’t broken when changing code.
- **Improved Documentation**: Tests serve as documentation for expected behavior.

---

### **Next Steps**
1. Set up **Jest** or another testing library in your project.
2. Write unit tests for existing functions or components.
3. Practice TDD by starting with a new feature: Write a test first, then implement the feature.
