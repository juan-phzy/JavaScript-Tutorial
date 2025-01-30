//Question 1 
class SubscriptionPlan{
    constructor(planName, price, features = []){
        this.planName = planName;
        this.price = price;
        this.features = features;
    }

    UpgradePlan(newPlanName, newPrice, newFeatures){
        this.planName = newPlanName;
        this.price = newPrice;
        this.features.push(newFeatures);
        return this

    }

    DowngradePlan(newPlanName, newPrice, newFeatures){
        this.planName = newPlanName;
        this.price = newPrice;
        this.features.push(newFeatures);
        return this;
    }

    details(){
        return `Current Plan:${this.planName}, Price:${this.price}, Features:${this.features}`
    }

}

const plan1 = new SubscriptionPlan(`Premium`, 25, [`ReaLl Time Update`, `More Advanced AI Filter`, `Lower Annual Prices`])
console.log(plan1.details())
plan1.UpgradePlan(`Ultimate`, 50, [`The ability to fly`, `Ignore Congestion Prices`, `More Customers`]);
console.log(plan1.details());
plan1.DowngradePlan(`Standard`, 10, [`You're Poor`, `No money back`, `Do better`]);
console.log(plan1.details());

 //Question 2 
 class MobileFoodtruck{
        constructor(name){
            this.name = name;
            this.location = null;
        }

        setLocation(location){
            this.location = location;
        }

        getLocation(){
            return this.location
            ? `This Truck is currently operating at ${this.location}`
            : `This truck is currently not in operation`
        }
 }

 const truck1 = new MobileFoodtruck(`Taco Tuesdays`)
 truck1.setLocation(`Queens`)
 console.log(truck1.getLocation());