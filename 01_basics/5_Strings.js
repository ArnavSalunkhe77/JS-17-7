let name = "Arnav"
let repoCount = 10;

console.log(`My name is ${name} and i have ${repoCount} repositories`)

const gameName = new String("Aryan-124")
console.log(gameName[2].toLocaleUpperCase())
console.log(gameName.toUpperCase()) // to convert whole string to uppercase
console.log(gameName.charAt(3)) // to find the character at index
console.log(gameName.indexOf("y")) // to find the index of a character
console.log(gameName.substring(0,2)) // to get the substring from index 0 to 2
console.log(gameName.slice(0,2)) // to get the substring from index 0 to 2
// in slice we can also use negative indexing for example
gameName.slice(-4) // it will return the last 4 characters of the string
console.log(gameName.split("-")) // to split the string into an array based on the separator

const newStringOne = "   Hello World    "
console.log(newStringOne.trim()) // to remove the whitespace from the start and end of the string

const url = "https://www.youtube.com/watch?v=123456789"
console.log(url.replace("youtube", "vimeo")) // to replace a substring with another substring
console.log(url.includes("youtube")) // to check if a substring is present in the string or not
