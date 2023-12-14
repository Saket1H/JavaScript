// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);   
// console.log("02" > 1);  

console.log(null > 0);    //false
console.log(null == 0);   //false
console.log(null >= 0);   //true
    /*  because equality(==) & comparison operator work differently comparison converts the null into 0 but equality doesn't.
    */
console.log(undefined == 0);   //false
console.log(undefined > 0);    //false
console.log(undefined < 0);    //false
console.log(undefined>=0);     //false
console.log(undefined<=0);     //false

// === (It compares datatype also.)

console.log("2" === 2);