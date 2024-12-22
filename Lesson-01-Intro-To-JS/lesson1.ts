let myName:string = "Juan";

const age:number = 21;

const favColor:string = "Blue"

const output = "My name is " + myName + " and I am " + age + " years old. My favorite color is " + favColor + ".";

console.log("double quote");

console.log('single quote');

console.log(`My name is ${myName} and I am ${age} years old. My favorite color is ${favColor}.`);

function sum2Nums(a:number, b:number):number {
    return a + b;
}

console.log(sum2Nums(5, 10));
console.log(`The return type of sum2Nums is ${  typeof(sum2Nums(5, 10))  }   `);

console.log("For Loop:");

const numArry:number[] = [];

for (let i = 1; i <= 10; i++) {
    numArry.push(i);
}

console.log(numArry);

console.log("While Loop:");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
