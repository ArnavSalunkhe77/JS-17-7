let age = 21

console.log(typeof age)
console.log(typeof(age))

let score = "33"

console.log(typeof score)
// if we want to convert a string to num we can use Number()

let toNum = Number(score)
console.log(typeof toNum)

// observation:
// "33" => 33 , "33abc" => NaN , "33.33" => 33.33 , True => 1
// False => 0 , null => 0 , undefined => NaN

let isLoggedIn = 1 

let booleanValue = Boolean(isLoggedIn)
console.log(booleanValue)

// 1 => true , 0 => false 
// "" => false , "arnav" => true , null => false

// to convert number to String we use String()

/*
usually browser gives string values so we will need to 
convert it to other data types
*/