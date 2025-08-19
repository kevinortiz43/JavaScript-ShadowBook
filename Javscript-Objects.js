/**
 * Challenge 22:
 *
 * Create an array of three objects where each object represents a person with `name` and `age` properties.
 * Write a loop that iterates over the array and prints a message for each person
 * saying "Hello, my name is [name] and I am [age] years old."
 */

const people = [
  { name: "John", age: 9 },
  { name: "Mark", age: 21 },
  { name: "Avatar", age: 45 },
];
// for (let index = 0; index < people.length; index++) {
//   console.log(people)
//   console.log(people[index]);
//   console.log(`Hello my name is ${people[index].name} and I am ${people[index].age} years old`)
// }

for (let person of people) {
  console.log(`My name is ${person.name}  and my age is ${person.age}`);
}

for (let person in people) {
  console.log(`${people[person].name} ${people[person].age}`);
}

people.forEach((person) => {
  console.log(person.name + " " + person.age);
});

/**
 * Challenge 23:
 *
 * Write a loop that prints the titles of all movies with a rating greater than 7.
 */

const movies = [
  { title: "Inception", rating: 8.8 },
  { title: "The Matrix", rating: 8.7 },
  { title: "Avatar", rating: 7.8 },
  { title: "Cats", rating: 2.7 },
];

for (let movie of movies) {
  console.log(movie);
  if (movie.rating > 7) {
    console.log(movie.title);
  }
}

// let arrayLength = studentScores.length;
// for (let row = 0; row < arrayLength; row++) {
//   let sum = 0;

//   let scoresArrayLength = studentScores[row].scores.length;
//   for (let column = 0; column < scoresArrayLength; column++) {
//     let studentIndividualScores = studentScores[row].scores[column];
//     sum += studentIndividualScores;
//   }

//   let average = sum / scoresArrayLength;

//   console.log(`${studentScores[row].name}
//      average = ${average}`);
// }

// for (let studentArray of studentScores) {
//   let sum = 0;
//   for (let studentScoresArray of studentArray.scores) {
//     console.log(studentScoresArray);

//     sum += studentScoresArray;
//     // console.log(sum);
//     // console.log(stud)
//   }
//   let average = sum / studentArray.scores.length;
//   console.log(`${studentArray.name}
//     average score: ${average}`);
// }

studentScores.forEach((studentArray) => {
  console.log(studentArray);

  let sum = 0;
  studentArray.scores.forEach((scores) => {
    console.log(scores);

    sum += scores;
  });
  let average = sum / studentArray.scores.length;
  console.log(average);
});

/**
 * Challenge 25:
 *
 * Write a loop that prints the total cost for each product (price * quantity) in the 'invoice' array.
 * For example: "Item: Laptop, Total: 2000"
 */

const invoice = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Phone", price: 500, quantity: 5 },
  { name: "Tablet", price: 300, quantity: 3 },
];

invoice.forEach((invoices) => {
  let totalCost = invoices.price * invoices.quantity;
  console.log(`Item: ${invoices.name}, ${totalCost}`);
});

const MyCar = {
  make: "Toyota",
  model: "prius",
  hybrid: true,
  avgMPG: 51,
  upgrades: ["Roof Rack", "Leather Seats"],
  honk: function () {
    console.log("BEEP BEEP");
  },
};

/**
 * Challenge 1:
 *
 * Make an obj named `myObj` with three properties: foo, bar, and baz.
 * Give foo the value "hello".
 * Give bar the value "world".
 * Give baz the value true.
 */

const myObj = {
  foo: "hello",
  bar: " world",
  baz: true,
};
/**
 * Challenge 2:
 *
 * Make an object named `myNestedObj`.
 * Give it a property named outer with the string "outer value" as its value.
 * Give it a property named innerObj with the value of an object.
 * Give this innerObj a property "inner" with the value "inner value".
 */

const myNestedObj = {
  outer: "Out Value",
  innerObj: {
    inner: "inner",
  },
};

/**
 * Challenge 4:
 *
 * Display the message contained in myLoopedObj by logging each property value
 * using a for...in loop.
 */

const myLoopedObj = {
  key1: "wow",
  key2: "you",
  key3: "did",
  key4: "it!",
};

const displayPropertyValues = (object) => {
  for (index in object) {
    console.log(object[index]);
  }
};

displayPropertyValues(myLoopedObj);

/**
 * Challenge 5:
 *
 * Log the result of using Math.floor(1.5) and Math.floor(2.3) to see what it does.
 * Log the result of using Math.ceil(1.5) and Math.ceil(2.3) to see what it does.
 * Log the result of calling Math.random() twice to see what it does.
 * Log the result of calling Math.sign on a negative number and a positive number.
 * Log the result of calling Math.max(10, 3).
 * Log the result of calling Math.min(1, 2, 3).
 * Log the result of calling Math.pow(4, 2).
 */

console.log(Math.floor(1.5));
console.log(Math.ceil(1.5));
console.log(Math.random());
console.log(Math.sign(-1512312312));
console.log(Math.sign(13412321));
console.log(Math.max(10, 3));
console.log(Math.min(10, 3));
console.log(Math.pow(4, 2));

/**
 * Challenge 6:
 *
 * Use the length property to log the last item in someArray.
 */

const someArray = [0, 1, 2, 3, 4, "you found me!"];

const loggingLengofLastElement = (array) => {
  console.log(array[array.length - 1].length);
};

loggingLengofLastElement(someArray);

/**
 * Challenge 9:
 *
 * Using an array method, add 'Mexican' to the array `myFavFoods`.
 */

const myFavFoods = ["Thai", "Italian", "Korean"];

const addingToFavFoods = (array, food) => {
  array.push(food);
  console.log(array);
};

addingToFavFoods(myFavFoods, "Mexican");

/**
 * Challenge 10:
 *
 * Using an array method, remove 'banana' from the array `fruits`.
 */

const fruits = ["banana", "apple", "pear"];

const removeFruitFromArrayForOfLoop = (array, food) => {
  for (const element of array) {
    if (element === food) {
      array.splice(array.indexOf(element), 1);
    }
  }
  console.log(array);
};
// removeFruitFromArrayForOfLoop(fruits, "apple");

const removeFruitFromArrayForInLoop = (array, food) => {
  for (index in array) {
    if (array[index] === food) {
      array.splice(index, 1);
    }
  }
  console.log(array);
};

// removeFruitFromArrayForInLoop(fruits, "apple");

const removeFruidFromArrayReassignment = (array, food) => {
  let newArray = [];

  for (element of array) {
    if (element !== food) {
      newArray.push(element);
    }
  }
  console.log(newArray);
};

removeFruidFromArrayReassignment(fruits, "banana");
