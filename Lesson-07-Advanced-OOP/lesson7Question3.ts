 //Question 3 
 abstract class Vehicle{
    engineRunning : boolean;
    constructor(public name: string, public location: string){
        this.name = name;
        this.location = location;
        this.engineRunning = false;
    }

    abstract startEngine():string;

    abstract stopEngine():string;
 }

class FoodTruck extends Vehicle{
    constructor(public name:string, public location:string, public foodType:string){
        super(name, location);

    }

    startEngine(): string{
        this.engineRunning = true;
        return `${this.name} is currenting operating at ${this.location}`
    }

    stopEngine(): string {
        this.engineRunning = false;
        return `${this.name} is currently not operating, it is last seen at ${this.location}`
    }
}

const truck1 = new FoodTruck(`Andy Low Mein`, `New Jersey`, `Chinese`)
console.log(truck1.startEngine());
console.log(truck1.stopEngine());