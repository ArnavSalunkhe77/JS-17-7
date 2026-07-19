// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2 Types of memory : Stack(Primitive) and Heap(Non-Primitive)

let name = "Arnav" // stored in stack Memory
let anotherName = name // copy of name is stored in anotherName
anotherName = "Aryan" // changing anotherName will not affect name
console.log(name)
console.log(anotherName)

// Non-primitive data types are stored in heap memory and the reference of the object is stored in stack memory
let userOne = {
    name : "Arnav",
    upiId : "arnav@upi",
}
let userTwo = userOne // reference of userOne is stored in userTwo
userTwo.name = "Aryan" // changing userTwo will also change userOne because both are pointing to the same reference in heap memory
console.log(userOne.name)