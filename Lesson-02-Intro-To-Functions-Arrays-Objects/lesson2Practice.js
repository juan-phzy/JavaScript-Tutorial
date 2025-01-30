//Question 1
const multiply = (num1, num2) => {
    return num1*num2
}

console.log(multiply(5, 4))

//Question 2
const colors = ['yellow', 'red', 'blue', 'green', 'purple']
colors.forEach((value) => console.log(`The colors are ${value}`))

//Question 3 
const car = {
    brand:'Blah',
    model:'eaw',
    year:1997
}
car.color = 'pink'
console.log(car);

//Question 4 
const person = {
    name : 'Chuck',
    movies :['Silent Voice', 'Titanic', "Weathering With You", "Ghost in the Shell", "Grave of the Fireflies"]

}
console.log(`One of my favorite movies is ${person.movies[3]}`)