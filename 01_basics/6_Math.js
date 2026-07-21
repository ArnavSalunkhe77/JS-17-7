const score =  400
// we can explicitily define the type of a variable in js using new Number()
const balance = new Number(1000)
// console.log(balance.toFixed(2)) // method to convert the number to a string with 2 decimal places

const otherNumber = 123.896
// console.log(otherNumber.toPrecision(4)) // method to convert the number to a string with 4 significant digits

const hundreds = 10000000
// console.log(hundreds.toLocaleString()) // method to convert the number to a string with a localized format/comma
// console.log(hundreds.toLocaleString('en-IN')) // method to convert the number to a string with a localized format/comma for Indian locale

// ++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++
// Math object in JavaScript provides various mathematical functions and constants

// console.log(Math)
// console.log(Math.PI) // returns the value of PI
// console.log(Math.round(4.7)) // rounds the number to the nearest integer
// console.log(Math.floor(4.7)) // rounds the number down to the nearest integer
// console.log(Math.ceil(4.7)) // rounds the number up to the nearest integer
// console.log(Math.trunc(4.7)) // removes the decimal part of the number
// console.log(Math.min(4, 7, 1, 9, 2))
// console.log(Math.max(4, 7, 1, 9, 2))

console.log(Math.random()) // returns a random number between 0 and 1
console.log((Math.random()*10) + 1) 
