class SubscriptionPlan {

    constuctor(planName,price,features){
        this.planName = planName;
        this.price = price;
        this.features = features
    }


    upgradePlan () {
        this.planName = "premium a.k.a. \"You're the goat\""
        this.price = 20
        this.features = "great"
        return this
    } 

    degradePlan(){
        this.planName = "normal a.k.a. \"bum\""
        this.price = 0
        this.features = "garbage"
        return this
    } 

}


let sp = new SubscriptionPlan("normal",0,"garbage").upgradePlan().degradePlan();

console.log(sp)


