//primitives

//7 types -> String, Number, Boolean , Null , Undefined , Symbol ,BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);  false

const bigNumber = 2343523423434n

//Non Primitive or Reference types

// Array, Objects , Functions 

const arr = [3, 5, 4 , 8 , 9]

const myObj={
    Name : "Saket Kumar",
    Age : "21"
}

const myFunction = function(){
    console.log("Function called");
    return 2+2;
}

console.log(typeof bigNumber);//bigint
console.log(typeof myFunction);//function
console.log(typeof myFunction());//number->change according to return type
console.log(typeof id); //symbol
console.log(typeof outsideTemp);//object

// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(store primitive Value)-> provide copy of the variable
let email="saket@gmail"
let email2=email;
email2="harsh@gmail"
console.log(email)   //saket@gmail
console.log(email2); //harsh@gmail

//Heap(store non-primitive Value)-> provide reference of the variable

let user1 = {
    name:"Saket",
    age:20
}
let user2= user1;
user2.name="harsh";
console.log(user1.name);  //harsh
console.log(user2.name);  //harsh