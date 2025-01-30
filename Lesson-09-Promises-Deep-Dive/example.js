let promise = new Promise((resolve

) =>{
    setTimeout(() => resolve("Data has been moved successfully once"),3000)
})

let promise2 =  new Promise((resolve) =>{
    setTimeout(() => resolve("Data has been moved successfully twice"),2000)
})

let promise3 = new Promise((reject) =>{
    setTimeout(() => reject("This one is the non successful one"),1000)
})



Promise.race([promise,promise2,promise3])
.then((results) =>{
    console.log(results)
})
.catch((error) => console.log(error))