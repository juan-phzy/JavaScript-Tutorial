class FoodTruck{
    #vendorName
    #email
    #trucksManaged
    constructor(vendorName, email, trucksManaged){
            this.#vendorName = vendorName;
            this.#email = email;
            this.#trucksManaged = trucksManaged;
    }

    getTrucksManaged = () => this.#trucksManaged
}

class PremiumVendor extends FoodTruck{
    #isPremium
    constructor(vendorName,email,trucksManaged,isPremium){
        super(vendorName,email,trucksManaged);
        this.#isPremium = isPremium;
    }

    isPremiumVendor = () => this.#isPremium
}


let foodtruck = new FoodTruck("MunchMap","munchmap.com",1)
let premiumVendor = new PremiumVendor("MunchMap","munchmap.com",1,true)

console.log(foodtruck.getTrucksManaged())
console.log(premiumVendor.isPremiumVendor())