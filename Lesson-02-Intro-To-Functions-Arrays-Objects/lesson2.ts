const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    // Method
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  
  console.log(person); 

  console.log(person.firstName); // Output: John
  // Output: { firstName: 'John', lastName: 'Doe', age: 30, isEmployed: true }

  console.log(person.getFullName()); // Output: John Doe

  // left off on modifying object
  