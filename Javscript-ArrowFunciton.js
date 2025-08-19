// MULTIPLY ALL PROBLEM

//// creating a base function

// function multiplyAll(...num) {
//   let result = 1;

//   for (let index = 0; index < num.length; index++) {
//     result *= num[index];
//   }
// }

// using the enhanced arrow function
const multiplyAll = (...nums) => {
  let result = 1;

  // base for loop

  // for (let index = 0; index < nums.length; index++) {
  //   result *= nums[index];
  // }

  // //  for in loop
  // for (let index in nums) {
  //   result *= nums[index];
  // }

  // // for of loop
  // for (let index of nums) {
  //   result *= index;
  // }

  // for each function
  nums.forEach((index) => {
    result *= index;
  });

  return result;
};

// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)); // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)); // should log: 375

// creating an enhanced arrow function in javascript
const mergingElements = (array1, array2) => {
  let sum = 0;

  // for (let index = 0; index < array1.length; index++) {
  //   sum = array1[index] + array2[index];
  //   array1[index] = sum;
  // }

  for (let index in array1) {
    sum = array1[index] + array2[index];
    array1[index] = sum;
  }

  return array1;
};

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]

const mergingTripletsAndQuints = (array1, array2) => {
  // function mergingTripletsAndQuints(array1, array2) {
  // ADD CODE HERE
  for (let index in array1) {
    if (array1[index] % 3 === 0 || array1[index] % 5 === 0) {
      let sum = 0;
      sum = array1[index] + array2[index];
      array1[index] = sum;
    }
  }
  return array1;
};

// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]


const closestToTheMark = (player1, player2) => {
  // function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${theMark}...`);




  //   we have number scores from player1, and player2, from the variables player1 and player2
//   we are getting "themark" which is a randomly generated number
//   we need to figure out which "player score" is closer to "the mark"

//   We need to figure out which players score is closer to the mark
//   how to figure out a number is close to the randomly generated number
//   player 1 score = 25
//   random number is 65
//   65 - 25 = 50
//   player 2 score =75
//   75 - 65 = 10

//   differenceplayer1 = 50 > differenceplayer2 =10
//   then player 2 is close since the difference is smaller
//   okay so we subtract the random generated number from the player scores
//   if player1 <player2 === true then player1 is closer else player 2 is closer
//   need to account for negative numbers. if the mark is less than the player score then we get a negative number which 				would incorrectly say that it is smaller than it actually is and we get a "wrong difference"
//   the smaller the difference the closer the player score is to " mark"
};

let difference1 = Math.abs(theMark - player1);
// console.log(`player1 difference: ${difference1}`);
let difference2 = Math.abs(theMark - player2);
// console.log(`player2 difference ${difference2}`);
