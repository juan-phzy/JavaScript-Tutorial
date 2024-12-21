### Lesson 7: Advanced Concepts in Object-Oriented Programming

Now that we've covered the basics of Object-Oriented Programming (OOP), it's time to dive deeper into **advanced OOP concepts** in JavaScript. These include **static methods and properties**, **abstract classes**, **interfaces (via TypeScript)**, and **method chaining**. These concepts will help you design a more robust architecture for your Food Truck app.

---

#### Static Methods and Properties

Static methods and properties belong to the class itself rather than any instance of the class. They are useful for utility functions and shared properties.

```javascript
class FoodTruck {
    static totalTrucks = 0; // Shared property for all trucks

    constructor(name, category, location) {
        this.name = name;
        this.category = category;
        this.location = location;
        FoodTruck.totalTrucks++;
    }

    static getTotalTrucks() {
        return `Total trucks registered: ${this.totalTrucks}`;
    }
}

// Create instances
const truck1 = new FoodTruck("Taco Fiesta", "Mexican", "Austin");
const truck2 = new FoodTruck("Pasta on the Go", "Italian", "Los Angeles");

console.log(FoodTruck.getTotalTrucks());
// Output: Total trucks registered: 2
```

---

#### Abstract Classes and Interfaces (with TypeScript)

While JavaScript does not natively support abstract classes, you can enforce similar behavior using TypeScript. Abstract classes act as blueprints, and interfaces define the structure of a class.

```typescript
// Abstract class
abstract class Vendor {
    constructor(public name: string, public email: string) {}

    abstract getDetails(): string; // Must be implemented by subclasses
}

class FoodTruckVendor extends Vendor {
    constructor(name: string, email: string, public trucksManaged: number) {
        super(name, email);
    }

    getDetails() {
        return `${this.name} manages ${this.trucksManaged} trucks.`;
    }
}

const vendor = new FoodTruckVendor("Juan", "juan@example.com", 3);
console.log(vendor.getDetails());
// Output: Juan manages 3 trucks.
```

---

#### Method Chaining

Method chaining allows multiple methods to be called on the same instance, leading to more concise and readable code. This is achieved by returning `this` from each method.

```javascript
class Truck {
    constructor(name) {
        this.name = name;
        this.categories = [];
        this.isOnMove = false;
    }

    addCategory(category) {
        this.categories.push(category);
        return this; // Return the current instance
    }

    setLocation(location) {
        this.location = location;
        return this;
    }

    startMoving() {
        this.isOnMove = true;
        return this;
    }

    stopMoving() {
        this.isOnMove = false;
        return this;
    }
}

const truck = new Truck("Taco Fiesta")
    .addCategory("Mexican")
    .setLocation("Austin")
    .startMoving();

console.log(truck);
// Output: Truck { name: 'Taco Fiesta', categories: [ 'Mexican' ], isOnMove: true, location: 'Austin' }
```

---

#### Getters and Setters

Getters and setters provide a controlled way to access and modify object properties. They also allow you to compute derived properties dynamically.

```javascript
class FoodTruck {
    constructor(name, rating) {
        this.name = name;
        this._rating = rating; // Private-like property
    }

    get rating() {
        return `${this._rating} stars`;
    }

    set rating(value) {
        if (value < 0 || value > 5) {
            console.error("Rating must be between 0 and 5.");
        } else {
            this._rating = value;
        }
    }
}

const truck = new FoodTruck("Sushi Truck", 4.5);
console.log(truck.rating); // Output: 4.5 stars
truck.rating = 5; // Update rating
console.log(truck.rating); // Output: 5 stars
truck.rating = 6; // Output: Rating must be between 0 and 5.
```

---

#### Prototypes and Inheritance in JavaScript

Under the hood, JavaScript uses prototypes for inheritance. Every object has a hidden `[[Prototype]]` property, which links to its prototype.

```javascript
function FoodTruck(name, category) {
    this.name = name;
    this.category = category;
}

FoodTruck.prototype.getDetails = function () {
    return `${this.name} serves ${this.category} cuisine.`;
};

const truck = new FoodTruck("Taco Fiesta", "Mexican");
console.log(truck.getDetails());
// Output: Taco Fiesta serves Mexican cuisine.
```

---

### Exercises

1. Create a `SubscriptionPlan` class with properties like `planName`, `price`, and `features`. Add methods to upgrade or downgrade the plan using method chaining.
2. Implement a `getLocation` method for a `MobileFoodTruck` class that dynamically returns its current location.
3. Create an abstract `Vehicle` class with methods like `startEngine()` and `stopEngine()`. Extend it to implement `FoodTruck` and `VendorVehicle` classes.
