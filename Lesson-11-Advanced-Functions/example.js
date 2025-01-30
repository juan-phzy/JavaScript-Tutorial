let array = [1,2,3,4,5,6]

let square = array.map((number) => number*number)
let filteredOutput = square.filter((number) => number % 2 === 0)
console.log(filteredOutput)