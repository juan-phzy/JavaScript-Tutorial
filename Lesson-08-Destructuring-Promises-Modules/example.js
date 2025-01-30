let object = {name : "Elijah's Food Truck", category: "Jamaican", isOpen: true}
let {name, category, isOpen} = object


let array = ["Chinese", "Jamaican"]
let otherArray = ["Japanese", "Russian", "Somoan"]
let combined = [...array,...otherArray]

console.log(combined)


let x = 1

let fleshedOutPromise = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(x == 1)
                resolve("Data received successfully")
            else
                reject("Failed to to transmit data")
        },2000)
    })
}

fleshedOutPromise().then((data) => console.log(data)).catch((error) => console.log(error))

let fetch = async () =>{
        try{
            let data = await new Promise((resolve,reject) => {
                setTimeout(() => { 
                    if(x == 1)
                        resolve("Successfully fetched the data")
                    else 
                        reject("Failed to pull the data")

                },2000)
            })

            console.log(data)
        }
        catch(error){
            console.log(error)
        }
}


fetch()

