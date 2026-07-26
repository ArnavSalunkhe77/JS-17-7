const instaUser = new Object();
instaUser.name = "John Doe";
instaUser.id = 12345;
instaUser.isVerified = true;
// console.log(instaUser);

const regularUser = {
    email : "arnavs1234@gmail.com",
    fullname : {
        userFullName : "ArnavSalunkhe",
        userId : "arnav.salunkhe",
    },
}
// console.log(regularUser);
// combine objects
const obj1 = {1:"ab" , 2:"cd"};
const obj2 = {3:"ab" , 4:"cd"};

const obj3 = Object.assign(obj1,obj2);
const obj4 = {...obj1 , ...obj2}; // spread
console.log(obj3);
console.log(obj4);

const users = [
    {
        id : 1,
        name : "Aryan"
    },
    {
        id : 2,
        name : "Aryaman"
    },
    {
        id : 3,
        name : "Arnav"
    }
]