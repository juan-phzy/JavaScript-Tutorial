### Lesson 22: Building Full-Stack Applications with JavaScript

This lesson focuses on creating full-stack applications using JavaScript, where you connect a **frontend** built with React (or similar frameworks) to a **backend** built with Node.js and Express. We'll also explore REST APIs and introduce GraphQL as an alternative to REST.

---

### **What Is Full-Stack Development?**
Full-stack development involves working on both the frontend (user-facing interface) and backend (server-side logic). The frontend handles **UI/UX**, while the backend manages **data storage, authentication, and server logic**.

---

### **Key Components of a Full-Stack Application**
1. **Frontend**: User interface built with React, Next.js, or similar frameworks.
2. **Backend**: APIs and server logic built with Node.js and Express.
3. **Database**: Data storage, such as MongoDB, PostgreSQL, or MySQL.
4. **API**: A communication bridge between the frontend and backend.

---

### **1. Building the Backend with Node.js and Express**

#### **What is Express?**
Express is a lightweight framework for building web servers with Node.js.

#### **Setting Up Express**
```bash
npm install express
```

#### **Basic Express Server**
```javascript
const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

---

### **2. Creating a REST API**

#### **What is a REST API?**
A REST (Representational State Transfer) API defines how the frontend communicates with the backend using HTTP methods:
- **GET**: Fetch data
- **POST**: Create data
- **PUT/PATCH**: Update data
- **DELETE**: Remove data

#### **Example: Building a REST API**
```javascript
const trucks = [
    { id: 1, name: "Taco Truck" },
    { id: 2, name: "Burger Truck" },
];

// Get all trucks
app.get("/trucks", (req, res) => {
    res.json(trucks);
});

// Add a new truck
app.post("/trucks", (req, res) => {
    const newTruck = req.body;
    trucks.push(newTruck);
    res.status(201).json(newTruck);
});

// Update a truck
app.put("/trucks/:id", (req, res) => {
    const { id } = req.params;
    const updatedTruck = req.body;
    const index = trucks.findIndex((truck) => truck.id === parseInt(id));
    if (index !== -1) {
        trucks[index] = { ...trucks[index], ...updatedTruck };
        res.json(trucks[index]);
    } else {
        res.status(404).json({ message: "Truck not found" });
    }
});

// Delete a truck
app.delete("/trucks/:id", (req, res) => {
    const { id } = req.params;
    const index = trucks.findIndex((truck) => truck.id === parseInt(id));
    if (index !== -1) {
        const deletedTruck = trucks.splice(index, 1);
        res.json(deletedTruck);
    } else {
        res.status(404).json({ message: "Truck not found" });
    }
});
```

---

### **3. Connecting the Frontend to the Backend**

#### **Using Fetch to Call the API**
```javascript
async function getTrucks() {
    const response = await fetch("http://localhost:5000/trucks");
    const trucks = await response.json();
    console.log(trucks);
}

getTrucks();
```

---

### **4. Introduction to GraphQL**

#### **What is GraphQL?**
GraphQL is an alternative to REST that allows clients to specify exactly what data they need, reducing over-fetching and under-fetching of data.

#### **Setting Up GraphQL**
```bash
npm install express-graphql graphql
```

#### **Basic GraphQL Server**
```javascript
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Truck {
        id: ID!
        name: String!
    }

    type Query {
        trucks: [Truck]
    }

    type Mutation {
        addTruck(name: String!): Truck
    }
`);

const root = {
    trucks: () => [{ id: 1, name: "Taco Truck" }],
    addTruck: ({ name }) => ({ id: 2, name }),
};

app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // GraphQL playground for testing
}));
```

---

### **5. Database Integration**
- Use **MongoDB** for NoSQL databases or **PostgreSQL/MySQL** for relational databases.
- Integrate using an ORM like **Mongoose** (for MongoDB) or **Prisma** (for relational databases).

---

### **Key Takeaways**
- REST APIs use standard HTTP methods for CRUD operations.
- GraphQL provides more flexibility by allowing clients to request specific data.
- Connecting the frontend and backend with tools like `fetch` ensures smooth data flow.
- Databases are essential for storing and retrieving persistent data.
