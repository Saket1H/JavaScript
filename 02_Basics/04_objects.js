// const tinderUser = new Object()->In this way we can also declare the objects
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Saket",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }  //for concating
// const obj4 = Object.assign({}, obj1, obj2, obj4), // used for concating.

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//give the array of keys
// console.log(Object.values(tinderUser));//give the array of values
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// that the particular property exists or not.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
