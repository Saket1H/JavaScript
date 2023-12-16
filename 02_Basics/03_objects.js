// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Saket",
    "full name": "Saket Kumar",//we cannot access it by using . operator
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "saket@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])->use to access the element 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "saket@chatgpt.com"
// Object.freeze(JsUser)-> by using this we cannot change the object
JsUser.email = "saket@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());