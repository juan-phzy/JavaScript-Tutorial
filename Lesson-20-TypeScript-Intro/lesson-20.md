### Lesson 20: JavaScript and TypeScript

In this lesson, we will dive into **TypeScript**, a superset of JavaScript that introduces static typing and advanced features to improve code maintainability and reduce bugs. We'll explore why TypeScript is a great addition to JavaScript development, how to migrate existing JavaScript codebases to TypeScript, and some advanced features.

---

### **What is TypeScript?**
- **Superset of JavaScript**: TypeScript builds on JavaScript by adding optional static types.
- **Compile-time Checking**: Detect errors during development instead of at runtime.
- **Scalability**: Makes large applications more manageable with better tooling and type safety.

---

### **Why Use TypeScript?**
1. **Early Error Detection**: Find bugs before runtime by catching type mismatches.
2. **Enhanced Readability**: Type annotations provide better documentation and clarity.
3. **Tooling Support**: Works seamlessly with IDEs for autocompletion, refactoring, and debugging.
4. **Backward Compatibility**: TypeScript compiles to plain JavaScript, ensuring it runs on any JavaScript environment.

---

### **Setting Up TypeScript**
Install TypeScript globally:
```bash
npm install -g typescript
```

Create a TypeScript project:
```bash
mkdir my-ts-project
cd my-ts-project
npm init -y
npm install typescript --save-dev
npx tsc --init
```

This generates a `tsconfig.json` file, where you can configure TypeScript options.

---

### **Example: JavaScript vs. TypeScript**
**JavaScript**:
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

**TypeScript**:
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```
- The `: string` after `name` enforces that the argument must be a string.
- The `: string` after the function enforces that the return value must be a string.

---

### **Migrating JavaScript to TypeScript**
1. **Rename `.js` to `.ts`:**
   Change the file extensions to `.ts`.
2. **Fix Type Errors**: 
   Add type annotations to variables, parameters, and return values.
3. **Install Declaration Files**:
   For third-party libraries, install type declarations:
   ```bash
   npm install --save-dev @types/library-name
   ```

---

### **Advanced TypeScript Features**
1. **Generics**: For reusable and type-safe code.
   ```typescript
   function identity<T>(value: T): T {
       return value;
   }
   const result = identity<number>(42); // T becomes number
   ```
2. **Type Guards**: Narrow types during runtime.
   ```typescript
   function isString(value: unknown): value is string {
       return typeof value === "string";
   }
   ```
3. **Interfaces**: Define object structures.
   ```typescript
   interface User {
       id: number;
       name: string;
   }
   const user: User = { id: 1, name: "Alice" };
   ```
4. **Enums**: Create named constants.
   ```typescript
   enum Status {
       Active,
       Inactive,
   }
   const currentStatus: Status = Status.Active;
   ```

---

### **Comparing JavaScript and TypeScript**
| **Feature**            | **JavaScript**                | **TypeScript**                     |
|-------------------------|-------------------------------|-------------------------------------|
| Typing                  | Dynamic                      | Static (with optional annotations) |
| Debugging               | Runtime                      | Compile-time                       |
| IDE Support             | Limited                      | Extensive                          |
| Error Detection         | Late (runtime)               | Early (compile-time)               |

---

### **Next Steps**
1. Start a new project in TypeScript or migrate an existing JavaScript project.
2. Experiment with advanced features like Generics, Type Guards, and Enums.
3. Leverage IDE features like autocompletion and refactoring.
