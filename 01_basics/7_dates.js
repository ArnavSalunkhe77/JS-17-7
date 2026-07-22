let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

console.log(myDate.toLocaleString('default' , 
    { weekday: 'long', year: 'numeric', 
        month: 'long', day: 'numeric' }))