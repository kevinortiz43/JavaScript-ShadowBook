// BEGINNER DESTRUCTURING Challenges
// Challenge 1: Object Destructuring (basics)
// Write a function getFullName(user) that takes a user object with { firstName, lastName } and returns a string "firstName lastName".
// Use object destructuring inside the function.

function getFullName (user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;  
}

console.log(getFullName({ firstName: "Alice", lastName: "Smith" })); 
// "Alice Smith"


// Challenge 2: Array Destructuring (basics)
// Write a function firstTwo(arr) that returns the first two elements of an array as an object: { first, second }.

function firstTwo(arr){
    const [first, second] = arr;
    return {first, second};
}

console.log(firstTwo([10, 20, 30])); 
// { first: 10, second: 20 }

// Challenge 3: Destructuring in a Callback
// Write a function namesAgesOnly(users) that accepts an array of objects and returns an array of just names, ages.

function namesAgesOnly1 (users) {
    return users.map( ({name, age}) => ({name, age}) );
    // return users.map(({name})=> {name})
}

function namesAgesOnly2(users) {
  return users.flatMap( ({ name, age }) => [name, age] ); // ["Alice", 30, "Bob", 25]
}

function namesAgesOnly3(users) {
  return users.map( ({ name, age }) => ({ name, age }) ); // [ { name: "Alice", age: 30 }, { name: "Bob", age: 25 } ]
}

function namesAgesOnly4(users) {
  return users.map( ({ name, age }) => [name, age]) ; // [ [ 'Alice', 30 ], [ 'Bob', 25 ] ]
}

function filterUser (users) {
    return users.filter( ({age, name}) => age < 26 && name.includes('o'))
}

const users = [
  { name: "Alice", age: 30, job: "programmer" },
  { name: "Bob", age: 25, job: "swimmer" }
];

console.log(namesAgesOnly1(users));
console.log(namesAgesOnly4(users));
console.log(filterUser(users));

// Challenge 4: Skip Items with Array Destructuring
// Write a function secondAndFourth(arr) that returns just the 2nd and 4th elements from an array.

function secondAndFourth(arr){
 const [ , second, , fourth] = arr;
 return [second, fourth];
//  return {second, fourth}; // you can put it into an obj as well
}

console.log(secondAndFourth([1, 2, 3, 4, 5]));
// [2, 4]


// Challenge 5: Destructuring + Reduce
// Write a function sumScores(players) where each player is { name, score }. Return the total sum of all scores.

 function sumScores(players) {
    return players.reduce( (acc, {score} ) => {
        acc = acc+ score;
       return acc;
    }, 0 )
 }


console.log(sumScores([ { name: "Alice", score: 10 }, { name: "Bob", score: 20 } ])); // 30
// Hint: In reduce, destructure { score } inside the callback.

// ex of obj destructuring
const personTwo = {
    name: 'Sally',
    age: 32,
    favFood: 'watermelon',
    address: {
        city: 'somewhere',
        state: 'elsewhere'
    }
}

const { name: randomLabel, age, favFood = 'defaultRice'} = personTwo;
  
console.log(randomLabel); // 'Sally'
console.log(age); // 32
console.log(favFood); // 'watermelon'


// Challenge: Extract Nested Properties
// You are given an array of user objects, and each user has a nested address object.
// Task 1:
// Write a function namesCities(users) that returns an array of strings like:
// ["Alice from New York", "Bob from Los Angeles", "Charlie from Chicago"]

function namesCities (users){
    return users.map( ( {name: firstName="John", address:{city = "Boston"}  } ) => {
        return `${firstName} from ${city}` 
    })
}

// Write a function filterByCity(users, city) that returns an array of just the names of users who live in that city.
// Example: filterByCity(users, "Chicago"); 
// ["Charlie"]

function filterByCity (users) {
    return users.filter ( ( {address: {city} } ) => {
        return city === 'Chicago'
    })
    .map( ({name}) => name);
}


const usersInfo = [
  { age: 30, address: { city: "New York", zip: "10001" } },
  { name: "Bob", age: 25, address: { city: "Los Angeles", zip: "90001" } },
  { name: "Mary", age: 25, address: { zip: "90001" } },
  { name: "Charlie", age: 35, address: { city: "Chicago", zip: "60007" } }
];

console.log(namesCities(usersInfo)); 
console.log(filterByCity(usersInfo));