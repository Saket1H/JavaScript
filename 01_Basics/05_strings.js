const name = "Saket"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Saket-sk-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);
//substring not work on negative value
const anotherString = gameName.slice(-13, -5)
console.log(anotherString)

const newStringOne = "   saket    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saket.com/saket%20kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));