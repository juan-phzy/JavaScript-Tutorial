### Lesson 23: Security in JavaScript Applications

Security is a critical aspect of application development. This lesson focuses on understanding common vulnerabilities in JavaScript applications and how to mitigate them using best practices.

---

### **Why Security Matters**
- Protect user data.
- Safeguard the application against attacks.
- Comply with legal and regulatory standards.
- Maintain user trust and app reputation.

---

### **1. Common Vulnerabilities**

#### **Cross-Site Scripting (XSS)**
- **What is it?** An attacker injects malicious scripts into a website, which are then executed in the browser of other users.
- **Example**: A comment form that accepts `<script>alert("XSS Attack")</script>` without validation.

#### **Cross-Site Request Forgery (CSRF)**
- **What is it?** An attacker tricks a user into performing unintended actions on a website they’re authenticated on.
- **Example**: A malicious email link that executes a bank transfer.

#### **SQL Injection**
- **What is it?** An attacker manipulates a SQL query to gain unauthorized access or modify the database.
- **Example**: Inputting `'; DROP TABLE users;--` into a login form.

---

### **2. Best Practices for Securing JavaScript Applications**

#### **Sanitize User Input**
- Validate and sanitize all user input to prevent injection attacks.
- **Example**:
  ```javascript
  const sanitizeInput = (input) => input.replace(/[^a-zA-Z0-9]/g, "");
  ```

#### **Use Prepared Statements**
- Use parameterized queries for database interactions to avoid SQL injection.
- **Example** with `pg` for PostgreSQL:
  ```javascript
  const query = "SELECT * FROM users WHERE username = $1";
  const result = await db.query(query, [username]);
  ```

#### **Implement CSP (Content Security Policy)**
- Restrict the sources of executable scripts to mitigate XSS attacks.
- **Example**:
  ```html
  <meta http-equiv="Content-Security-Policy" content="script-src 'self';">
  ```

#### **Enable HTTPS**
- Encrypt data in transit to protect against eavesdropping and man-in-the-middle attacks.

#### **Use Secure Authentication Practices**
- Store passwords as hashed values using algorithms like bcrypt.
- Use **JWT (JSON Web Tokens)** for secure token-based authentication.
- Implement multi-factor authentication (MFA).

#### **Prevent CSRF**
- Use CSRF tokens to validate requests.
- **Example**:
  ```javascript
  const csrfToken = generateToken();
  ```

#### **Limit Data Exposure**
- Only return necessary data in API responses.
- **Example**:
  ```javascript
  const user = await User.findById(id).select("name email");
  ```

---

### **3. Security Tools**

#### **Libraries and Frameworks**
- **Helmet.js**: Secures Express apps by setting HTTP headers.
  ```javascript
  const helmet = require("helmet");
  app.use(helmet());
  ```
- **OWASP ZAP**: Scans applications for vulnerabilities.

#### **Static Analysis Tools**
- Use tools like ESLint and SonarQube to detect security issues in code.

---

### **4. Token-Based Authentication**

#### **What is JWT?**
A compact, URL-safe token for secure data exchange.

#### **Structure of a JWT**
1. **Header**: Algorithm and token type.
2. **Payload**: Claims (user data).
3. **Signature**: Verifies integrity.

#### **Creating and Verifying JWT**
- **Generate Token**:
  ```javascript
  const jwt = require("jsonwebtoken");
  const token = jwt.sign({ id: user.id }, "secretKey", { expiresIn: "1h" });
  ```
- **Verify Token**:
  ```javascript
  jwt.verify(token, "secretKey", (err, decoded) => {
    if (err) throw new Error("Invalid token");
    console.log(decoded);
  });
  ```

---

### **5. Secure Data Storage**

#### **Hashing Passwords**
- Use bcrypt for hashing passwords before storing them.
  ```javascript
  const bcrypt = require("bcrypt");
  const hash = await bcrypt.hash(password, 10);
  ```

#### **Encrypting Sensitive Data**
- Use libraries like `crypto` for encryption.
  ```javascript
  const crypto = require("crypto");
  const encrypted = crypto.createCipher("aes-256-cbc", "key").update(data, "utf8", "hex");
  ```

---

### **6. Example: Secure Login Flow**

1. **User Sign-Up**:
   - Hash and store the password.
   ```javascript
   const hashedPassword = await bcrypt.hash(password, 10);
   await User.create({ username, password: hashedPassword });
   ```

2. **User Login**:
   - Validate the password using `bcrypt.compare`.
   - Generate and return a JWT.
   ```javascript
   const isMatch = await bcrypt.compare(inputPassword, storedPassword);
   if (isMatch) {
       const token = jwt.sign({ id: user.id }, "secretKey", { expiresIn: "1h" });
       res.json({ token });
   }
   ```

3. **API Requests**:
   - Verify the token before processing the request.
   ```javascript
   const token = req.headers.authorization.split(" ")[1];
   jwt.verify(token, "secretKey", (err, decoded) => {
       if (err) return res.status(401).json({ error: "Unauthorized" });
       req.user = decoded;
       next();
   });
   ```

---

### **7. Key Takeaways**
- Prioritize security from the start of development.
- Use industry-standard tools and libraries to mitigate common vulnerabilities.
- Regularly test and update your application to address new threats.
