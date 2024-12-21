### Lesson 6: Object-Oriented Programming in JavaScript

#### Overview
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which can contain data and methods. In JavaScript, OOP allows us to model real-world entities and relationships effectively, especially when building complex applications like your Food Truck app.

#### Key Concepts of OOP
1. **Objects**: Collections of key-value pairs representing properties and methods.
2. **Classes**: Blueprints for creating objects with similar properties and methods.
3. **Inheritance**: Mechanism where one class can derive properties and methods from another.
4. **Encapsulation**: Bundling data and methods within a class to protect the internal state.
5. **Polymorphism**: Ability to override or redefine methods in derived classes.

#### Creating and Using Objects
```javascript
// Creating a simple object
const truck = {
    name: "Pasta on the Go",
    category: "Italian",
    location: "Los Angeles",
    showDetails: function() {
        return `${this.name} serves ${this.category} cuisine in ${this.location}.`;
    }
};

console.log(truck.showDetails());
// Output: Pasta on the Go serves Italian cuisine in Los Angeles.
```

#### Using Classes
```javascript
// Creating a class
class FoodTruck {
    constructor(name, category, location) {
        this.name = name;
        this.category = category;
        this.location = location;
    }

    showDetails() {
        return `${this.name} serves ${this.category} cuisine in ${this.location}.`;
    }
}

// Instantiating objects
const truck1 = new FoodTruck("Taco Fiesta", "Mexican", "Austin");
console.log(truck1.showDetails());
// Output: Taco Fiesta serves Mexican cuisine in Austin.
```

#### Inheritance
```javascript
// Extending a class
class MobileFoodTruck extends FoodTruck {
    constructor(name, category, location, isOnMove) {
        super(name, category, location);
        this.isOnMove = isOnMove;
    }

    currentStatus() {
        return this.isOnMove
            ? `${this.name} is currently on the move.`
            : `${this.name} is stationary at ${this.location}.`;
    }
}

const truck2 = new MobileFoodTruck("BBQ Masters", "BBQ", "Houston", true);
console.log(truck2.currentStatus());
// Output: BBQ Masters is currently on the move.
```

#### Encapsulation
```javascript
// Using private fields
class Vendor {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    verifyPassword(inputPassword) {
        return this.#password === inputPassword;
    }
}

const vendor = new Vendor("foodTruckKing", "secure123");
console.log(vendor.verifyPassword("secure123")); // true
console.log(vendor.#password); // SyntaxError: Private field '#password' must be declared
```

#### Polymorphism
```javascript
class FoodTruck {
    showDetails() {
        return "This is a food truck.";
    }
}

class TacoTruck extends FoodTruck {
    showDetails() {
        return "This is a taco truck.";
    }
}

const truck = new TacoTruck();
console.log(truck.showDetails());
// Output: This is a taco truck.
```

---

#### Understanding Check
1. Create a class for vendors with properties like `vendorName`, `email`, and `trucksManaged`.
2. Extend this class to create a `PremiumVendor` with an additional property `subscriptionPlan`.
3. Instantiate objects from both classes and call their methods.
