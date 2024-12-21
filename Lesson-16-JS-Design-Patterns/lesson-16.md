#### **Lesson 16: JavaScript Design Patterns**

#### **Introduction**
Design patterns are reusable solutions to common programming problems. They provide structure and best practices for solving particular issues in software development. In JavaScript, design patterns help write more maintainable and scalable code.

---

#### **1. Categories of Design Patterns**
Design patterns can be broadly categorized into three types:
- **Creational Patterns**: Focus on object creation.
- **Structural Patterns**: Focus on the composition of objects.
- **Behavioral Patterns**: Focus on object communication and behavior.

---

#### **2. Creational Patterns**
These patterns deal with the creation of objects while abstracting the instantiation logic.

**Singleton Pattern**  
Ensures a class has only one instance and provides a global point of access.

```javascript
const Singleton = (function () {
    let instance;

    function createInstance() {
        return { data: "I am the only instance" };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // Output: true
```

**Factory Pattern**  
Provides an interface to create objects without specifying the exact class.

```javascript
class FoodTruck {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

function TruckFactory(type) {
    if (type === "mobile") return new FoodTruck("Taco Truck", "Mobile");
    if (type === "stationary") return new FoodTruck("Pasta Cart", "Stationary");
}

const mobileTruck = TruckFactory("mobile");
console.log(mobileTruck); // Output: FoodTruck { name: "Taco Truck", type: "Mobile" }
```

---

#### **3. Structural Patterns**
These patterns deal with the composition of classes or objects.

**Module Pattern**  
Encapsulates related functions and variables in a single object.

```javascript
const TruckModule = (function () {
    const trucks = [];

    return {
        addTruck: function (truck) {
            trucks.push(truck);
        },
        getTrucks: function () {
            return trucks;
        },
    };
})();

TruckModule.addTruck("Taco Truck");
console.log(TruckModule.getTrucks()); // Output: ["Taco Truck"]
```

**Decorator Pattern**  
Adds functionality to an object dynamically.

```javascript
function Truck(name) {
    this.name = name;
}

function addLocation(truck, location) {
    truck.location = location;
    return truck;
}

const myTruck = new Truck("Taco Truck");
const updatedTruck = addLocation(myTruck, "Los Angeles");
console.log(updatedTruck); // Output: Truck { name: "Taco Truck", location: "Los Angeles" }
```

---

#### **4. Behavioral Patterns**
These patterns handle communication between objects.

**Observer Pattern**  
Defines a one-to-many dependency, so when one object changes state, others are notified.

```javascript
class FoodTruck {
    constructor(name) {
        this.name = name;
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(message) {
        this.observers.forEach((observer) => observer.update(message));
    }
}

class User {
    update(message) {
        console.log(`Notification received: ${message}`);
    }
}

const tacoTruck = new FoodTruck("Taco Truck");
const user1 = new User();
const user2 = new User();

tacoTruck.addObserver(user1);
tacoTruck.addObserver(user2);

tacoTruck.notifyObservers("The truck is now open!"); 
// Output: Notification received: The truck is now open!
```

---

#### **5. Practical Use Cases**
- **Singleton Pattern** for managing app-wide state like configuration or database connections.
- **Factory Pattern** for creating various object types (e.g., different kinds of trucks).
- **Observer Pattern** for push notifications or live updates.

---

#### **Summary**
In this lesson, you’ve learned:
- The categories of design patterns.
- Key patterns like Singleton, Factory, Module, Decorator, and Observer.
- How these patterns can be applied in JavaScript.
