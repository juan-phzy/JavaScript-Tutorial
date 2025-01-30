//Question 1 
const FoodTruck = {
    truckName: `Chow Mein`,
    categories : `Chinese`,
    location : `South Africa`
};

const {truckName, categories, location} = FoodTruck;
console.log(`${truckName} is currently serving ${categories} food at ${location}`)

//Question 2 
const EuropeanFood = [`Spanish`, `German`, `Italian`, `French`];
const AsianFood = [`Japanese`, `Filipino`, `Chinese`, `Vietnamese`];
const AllFood = [...EuropeanFood, ...AsianFood];
console.log(AllFood);

const listTrucks = (...names) => {
    return `The list of trucks are : ${names.join(", ")}`
}

console.log(listTrucks('Asian Burger', `French Soup`, `German Rice`, `Halal Bacon`))

//Question 3 
const fetchData = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(`Aha this isn't so bad for now`);
        }, 1000);
    });
};
fetchData().then((data) => console.log(data)).catch((error) => console.error(error));

//Question 4 
const fetchAsyncData = async () => {
    try {
        const data = await new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { name: "Taco Truck", location: "Downtown" },
                    { name: "Burger Joint", location: "Uptown" },
                    { name: "Pizza Express", location: "Midtown" },
                    { name: "Sushi Spot", location: "Beachside" }
                ]);
            }, 1000);
        });
        console.log(data); 
    } catch (error) {
        console.error(error); 
    }
};
fetchAsyncData();