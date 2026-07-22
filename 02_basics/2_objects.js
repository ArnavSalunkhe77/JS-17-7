// object literals

const jsUser = {
    name : 'John',
    age : 30,
    isAdmin : true,
    'likes birds' : true, // property name with space must be quoted
}
// console.log(jsUser.name) // John
// console.log(jsUser['likes birds']) // true
// Object.freeze(jsUser)// freezes the object, so that no new properties can be added or existing properties can be modified
jsUser.age = 31 // this will not work as the object is frozen


jsUser.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
}
console.log(jsUser.greeting()) 