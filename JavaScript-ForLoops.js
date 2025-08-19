// Complete the function droids that accepts an array of strings
//  and iterates through the array using a FOR loop.
//  Update the variable result to "Found Droids!"
// if the array contains the string "Droids".
// Otherwise update the variable result to
// "These are not the droids you're looking for." Return your updated result.

function droids(arr) {
  let result = "";

  // basic for loop with iterator
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "Droids") {
      result = "Found Droids!";
    } else {
      result = "These are not the droids you're looking for.";
    }
  }

  // copy the array values into "x"
  for (let x of arr) {
    if (x == "Droids") {
      result = "Found Droids!";
    } else {
      result = "These are not the droids you're looking for.";
    }
  }

  return result;

  // copy the arrays index into x
  for (let x in arr) {
    // console.log(x);
    if (arr[x] == "Droids") {
      result = "Found Droids!";
    } else {
      result = "These are not the droids you're looking for.";
    }
  }
  return result;

  // using the built in for each method. it uses a built in function and a predefined parameter
  arr.forEach(function (arr) {
    if (arr == "Droids") {
      result = "Found Droids!";
    } else {
      result = "These are not the droids you're looking for.";
    }
  });
  return result;
}

// Uncomment these to check your work!
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"];
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"];
console.log(droids(starWars));
console.log(droids(thrones));

// Using a FOR loop, write a function addN which adds
// the argument n to each number in the array arr and returns the updated arr.

function addN(arr, n) {
  // ADD CODE

  // enhanced for loop that gives you the index.
  for (let i in arr) {
    // it access the value of that array then adds the number in place
    // arr[i] +=n
    // arr[0] +=3
    // [1 + 3]
    arr[i] += n;
  }

  // keep this here
  return arr;
}

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]

// another problem

// Create a function makePlural that accepts an array argument.
//  makePlural will iterate through the array, add an 's' to the end of each array element, and return the mutated array.
function makePlural(arr) {
  // using a basic for loop and for in loop
  // get the string inside an array
  // split it and turn each string into an array
  // use .push to add the s at the end of the string 	 //   array
  // use .join to turn the array back to a string

  // first approach
  let currentString = "";
  let backToString = "";
  // for(let i=0; i<arr.length; i++){
  for (let i in arr) {
    currentString = arr[i].split("");
    currentString.push("s");
    backToString = currentString.join("");
    arr[i] = backToString;
  }

  return arr;
}

const arr1 = ["lion", "tiger", "bear"];
const arr2 = ["computer", "video game", "system"];

// Uncomment these to check your work!
console.log(makePlural(arr1)); // should log: ['lions', 'tigers', 'bears']
console.log(makePlural(arr2)); // should log: ['computers', 'video games', 'systems']

// another problem

// Using a FOR loop, write a function getTheSum
// which adds each element in arr to find the array total.

function getTheSum(arr) {
  let sum = 0;

  // // base for loop
  // for (let num = 0; num < arr.length; num++) {
  //   sum += arr[num];
  // }

  // // for of loop
  // for (let num of arr) {
  //   sum += num;
  // }

  // // for in loop
  // for (let num in arr) {
  //   sum += arr[num];
  // }

  // for each function
  arr.forEach((num) => {
    sum += num;
  });

  return sum;
}

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33

// MULTIPLY ALL PROBLEM

//  creating a function
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

//Challenge: Loops - Summing Two Arrays
// Write a function mergingElements which adds each element in array1
//  to the corresponding element of array2 and returns the new array.

// we assume that the arrays are the same length

// function of merginElements(array1, array2)
// function mergingElements(array1, array2) {
//   let sum = 0;

//   // base for loop, declare a variable called index and set the stopping point to less than the length of the array.
//   // in this case we have two arrays at the same length
//   // have the for loop increase the index counter by 1 each time we go through the loop.

//   // we previosuly declared a variable of sum equal to 0
//   // sum is = to array1 at the current index + array2 at the current index
//   // then we will overwrite the value of array1 at the current index to the sum
//   // then we return array1 with the new sums
//   //reason we do this is to not waste memory by creating a new variable

//   for (let index = 0; index < array1.length; index++) {
//     sum = array1[index] + array2[index];
//     array1[index] = sum;
//   }

//   // same as above but not creating a variable for a counter we just access the index directly use the for in loop
//   for (let index in array1) {
//     sum = array1[index] + array2[index];
//     array1[index] = sum;
//   }
// }

// we assume that the arrays are the same length

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
