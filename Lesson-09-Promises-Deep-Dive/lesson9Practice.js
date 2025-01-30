//Question 1 
const myPromise1 = new Promise((resolve, reject) =>{
    setTimeout(() =>
        resolve(`Hello World`), 2000
    );
});

myPromise1
.then((data) => console.log(data))
.catch((error) => console.log(error));

//Question 2 
const myPromise2 = new Promise((resolve, reject) =>{
    setTimeout(() =>
        reject(`BooHoo Something went wrong`), 1000
    );
});

myPromise2
.then((data) => console.log(data))
.catch((error) => console.log(error));

//Question 3
const myPromise3 = new Promise((resolve, reject) =>{
    setTimeout(() =>
        resolve(`messsage 1 `), 1000
    );
});
myPromise3
.then((data) => {
    console.log(data);
    return `message 2`
})
.then((message) =>{
    console.log(message);
    return `message 3 `
})
.then((finalMessage) =>{
    console.log(finalMessage)
})

//Question 4 
const promise1 = Promise.resolve("Aloha");
const promise2 = Promise.resolve("Glazed Hot Dog");
const promise3 = Promise.resolve("Pineapple Pizza");

Promise.all([promise1, promise2, promise3])
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})

//Question 5 
const highSpeed = new Promise((resolve, reject) =>{
    setTimeout(() => 
        resolve(`I'm the fastest man alive`), 1000
    );
})

const lowSpeed = new Promise((resolve, reject) =>{
    setTimeout(() => 
        resolve(`Oh no`), 1000
    );
})

Promise.race([highSpeed, lowSpeed])
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})