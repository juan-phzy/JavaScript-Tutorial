//Question 1 
class Vendors{
    constructor(vendorName, email, trucksManaged){
        this.vendorName = vendorName;
        this.email = email;
        this.trucksManaged = trucksManaged
    }

    details(){
       return `Name:${this.vendorName}, Email:${this.email}, Truck Managed:${this.trucksManaged}`;
    }
}

//Question 2
class PremiumVendors extends Vendors{
    constructor(vendorName, email, trucksManaged, subscriptionPlan){
        super(vendorName, email, trucksManaged);
        this.subscriptionPlan = subscriptionPlan;
    }

    planDetails(){
        return this.subscriptionPlan
        ? `${this.vendorName} currently has an active subscription`
        : `${this.vendorName} does not have any active subscription` 


    }

}

//Question 3 
const vendor1 = new Vendors('Momos Garden', 'momosgarden@gmail.com', 4 );
const vendor2 = new PremiumVendors('Hamburger Haven', 'hamhaven@gmail.com', 9, true);
console.log(vendor1.details());
console.log(vendor2.details());
console.log(vendor2.planDetails());
