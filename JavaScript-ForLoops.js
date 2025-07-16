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

  // second approach
  // initialize an empty array
  // using a for in loop
  // create a variable then access each string and 		// concatenate with the "s"
  // .push to put each new string inside the
  // initialized array

  let output = [];
  let plural = "";

  for (let i in arr) {
    plural = arr[i] + "s";
    output.push(plural);
  }

  return output;
}

const arr1 = ["lion", "tiger", "bear"];
const arr2 = ["computer", "video game", "system"];

// Uncomment these to check your work!
console.log(makePlural(arr1)); // should log: ['lions', 'tigers', 'bears']
console.log(makePlural(arr2)); // should log: ['computers', 'video games', 'systems']


// another problem

// Using a FOR loop, write a function getTheSum 
// which adds each element in arr to find the array total.


function getTheSum(arr){
  // ADD CODE HERE
  let sum=0;
  
  // base for loop
  for(let num=0; num<arr.length; num++){
    sum += arr[num]
  }
  
  // for of loop
  for(let num of arr){
    sum +=num;
  }
  
  
  // for in loop
  for(let num in arr){  
    sum+=arr[num];
  }
  
	// for each function  
  arr.forEach(num=>{
    sum += num;
  })
  
  return sum;
}

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33


