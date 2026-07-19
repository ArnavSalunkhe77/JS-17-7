/* Primitive and non-primitive data types 
are 2 types of data types it tells us
how data is kept in memory and how it is stored in memory.*/

// primitive(call by value)
// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

// const id = Symbol("id")
// const anotherId = Symbol("id")

// console.log(id === anotherId) // false because both are unique and different

// Non-primitive(call by reference)
// Types : Array , Object , Function

// Arrays
const heroes = ["Ironman", "Spiderman", "Thor"]
//Objects ---> key : val Pairs
const hero = {
    name : "Tony Stark",
    age : 45,
    isAlive : true
}

// Functions --> diff syntax
const add = function(a,b){ // 1
    return a + b;
}
// arrow function
const add2 = (a,b) => { // 2
    return a + b
}

