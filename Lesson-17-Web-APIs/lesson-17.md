### Lesson 17: Web APIs and Browser-Specific Features

In this lesson, we’ll dive into **Web APIs** and **browser-specific features** that allow JavaScript to interact with the browser and the environment. These APIs are the bridge between JavaScript and the browser's capabilities, providing tools to handle everything from making network requests to working with local storage and enabling real-time communication.

---

### **Key Concepts**
1. **Fetch API (in-depth)**
   - **What it does**: Allows you to make network requests to fetch resources, such as APIs, HTML pages, or assets.
   - **Why use it**: It’s a modern replacement for `XMLHttpRequest` with a more streamlined and promise-based syntax.

   **Example: Basic GET Request**
   ```javascript
   fetch('https://jsonplaceholder.typicode.com/posts/1')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('Error:', error));
   ```

   **Example: POST Request**
   ```javascript
   fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
   })
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('Error:', error));
   ```

---

2. **File API**
   - **What it does**: Provides a way to handle file uploads and access file contents locally.
   - **Why use it**: Enables developers to create rich user experiences with file uploads, previews, and downloads.

   **Example: Reading a File**
   ```javascript
   const fileInput = document.querySelector('input[type="file"]');
   fileInput.addEventListener('change', event => {
       const file = event.target.files[0];
       const reader = new FileReader();

       reader.onload = () => console.log(reader.result);
       reader.readAsText(file); // Reads the file as text
   });
   ```

---

3. **WebSockets**
   - **What it does**: Enables two-way communication between a client and server in real time.
   - **Why use it**: Ideal for real-time features like chat applications, live notifications, or collaborative tools.

   **Example: WebSocket Client**
   ```javascript
   const socket = new WebSocket('wss://example.com/socket');

   socket.addEventListener('open', () => {
       console.log('Connected to WebSocket');
       socket.send(JSON.stringify({ message: 'Hello Server!' }));
   });

   socket.addEventListener('message', event => {
       console.log('Message from server:', event.data);
   });

   socket.addEventListener('close', () => {
       console.log('Disconnected from WebSocket');
   });
   ```

---

4. **LocalStorage, SessionStorage, and IndexedDB**
   - **LocalStorage**: Persistent storage across browser sessions.
     ```javascript
     localStorage.setItem('key', 'value');
     console.log(localStorage.getItem('key')); // Output: 'value'
     localStorage.removeItem('key');
     ```

   - **SessionStorage**: Data stored for the duration of the page session.
     ```javascript
     sessionStorage.setItem('sessionKey', 'sessionValue');
     console.log(sessionStorage.getItem('sessionKey')); // Output: 'sessionValue'
     sessionStorage.clear();
     ```

   - **IndexedDB**: A more powerful API for storing larger datasets.
     ```javascript
     const request = indexedDB.open('myDatabase', 1);
     request.onsuccess = event => {
         const db = event.target.result;
         console.log('Database opened successfully:', db);
     };
     ```

---

### **Why These APIs Matter**
- **Fetch API** simplifies network calls, making your app dynamic and connected.
- **File API** enhances user experience with file uploads and previews.
- **WebSockets** enable instant updates, essential for real-time applications.
- **LocalStorage, SessionStorage, and IndexedDB** ensure your app can handle data offline or improve performance by caching.
