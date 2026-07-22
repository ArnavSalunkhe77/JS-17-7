const arr1 = [1,2,3,4,5]
const arr2 = new Array(1,2,3,4,5)
// console.log(arr1)
// console.log(arr2)
// both arrays are same but the first one is more readable and easy to use.
// it is just the way of initializing an array. The first one is called array literal and the second one is called array constructor.
//  The first one is more preferred way

// -------------------------------------------------------------------------------------
// Array methods
arr1.push(6) // adds an element at the end of the array
// console.log(arr1)

arr1.pop() // removes the last element of the array
// console.log(arr1)

// console.log(arr1.includes(3)) // checks if the array includes the element or not


const newArr = arr1.join() // joins the elements of the array and returns a string

// slice
const slicedArr = arr1.slice(1,4) // returns a new array with the elements from index 1 to 3
// console.log(slicedArr)
// splice 
const splicedArr = arr1.splice(1,3) // removes 3 elements from index 1 and returns the removed elements
// console.log(splicedArr)
// difference between slice and splice is that slice does not modify the original array but splice modifies the original array


// concat
const marvel = ['Iron Man', 'Captain America', 'Thor']
const dc = ['Batman', 'Superman', 'Wonder Woman']

const heroes = marvel.concat(dc) // concatenates two arrays and returns a new array
// console.log(heroes)

// spread operator
const allHeroes = [...marvel, ...dc] // concatenates two arrays and returns a new array
// console.log(allHeroes)

// flat
const nestedArr = [1,2,3,[4,5,6],[7,8,9]]
const flatArr = nestedArr.flat() // flattens the array and returns a new array
// console.log(flatArr)

// map
const mappedArr = arr1.map((element) => element * 2) // returns a new array with the elements multiplied by 2
console.log(mappedArr)