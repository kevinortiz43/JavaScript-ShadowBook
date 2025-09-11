// ===============================
// Practice Assessment Starter
// ===============================
// Timebox: ~90 minutes total (~30 min per problem)
// Run with: node index.js
//
// Tips:
// - Read the prompt carefully and define success in your own words.
// - Work a few small examples by hand.
// - Write a short plan (pseudocode) before you code.
// - If stuck >5–7 minutes, try a smaller input or a different angle, or move on and return later.

// ---------------------------------------------
// Challenge 1: intersection
// ---------------------------------------------
// Write a function `intersection(arr1, arr2)` that returns a new array containing the
// unique values that appear in BOTH input arrays. Order does not matter.
// Duplicates in the inputs should appear only once in the result.
//
// Examples:
// intersection([1,2,2,3], [2,2,4]) -> [2]
// intersection(['a','b','c'], ['b','b','d','a']) -> ['a','b']
//
// Edge cases to consider:
// - One or both arrays empty
// - Arrays with mixed types (numbers/strings) are out of scope for this practice (assume like types)

//we have 2 arrays
// arr 1
// arr 2
// they are like types so both arrays are numbers or letters

// brute force
// for loop if arr[i] === arr[j] then push into new arr

//  optimized use a hashmap

//arr1 take first array and compare it with second array
// if arr2 has any elements the same in first array then push it into new array

// brute force or pointers
function intersection(arr1, arr2) {
  // Your code here

  let newArray = [];

  console.log(arr1.includes(arr2[3]));

  for (elements of arr2) {
    if (arr1.includes(elements) && !newArray.includes(elements)) {
      newArray.push(elements);
    }
  }

  //   console.log(newArray);

  return newArray;
}

// --- sample tests ---
console.log(intersection([1, 2, 2, 3], [2, 3, 3, 4])); // [2,3]
console.log(intersection(["a", "b"], ["b", "b", "c"])); // ['b']
console.log(intersection([], [1, 2])); // []
console.log(intersection([], [])); // []

// ---------------------------------------------
// Challenge 2: createAccount
// ---------------------------------------------
// Create a function `createAccount(initialBalance)` that returns an object with three methods:
//   - deposit(amount): increases the balance by `amount`
//   - withdraw(amount): decreases the balance by `amount`
//                     (if a withdrawal would drop below 0, do not change the balance
//                      and instead return the string "Insufficient funds")
//   - getBalance(): returns the current balance
//
// The balance must be private via closure (not accessible directly).
//
// Examples:
// const account = createAccount(100);
// account.getBalance() -> 100
// account.deposit(50); account.getBalance() -> 150
// account.withdraw(70); account.getBalance() -> 80
// account.withdraw(200); account.getBalance() -> still 80, and withdraw returns "Insufficient funds"

function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    getBalance: function () {
      return balance;
    },
    withdraw: function (amount) {
      console.log(balance);
      let sum = balance - amount;
      let error = "insufficient funds";
      if (sum >= 0) {
        return (balance -= amount);
      } else {
        console.log(error);
        return error;
      }
    },
    deposit: function (amount) {
      return (balance += amount);
    },
  };
}

// --- sample tests ---
const acct = createAccount(100);
console.log(acct.getBalance()); // 100
console.log(acct.deposit(25)); // 125
console.log(acct.withdraw(200)); // "Insufficient funds"
console.log(acct.withdraw(30)); // 95
console.log(acct.getBalance()); // 95

// ---------------------------------------------
// Challenge 3: functionQueue
// ---------------------------------------------
// Create a function `functionQueue()` that returns an object with two methods:
//   - add(fn): add a function to an internal queue
//   - run(): run all queued functions IN ORDER
//
// Each function will be invoked with a shared "state" value (a counter) that is private to the queue.
//   - The counter starts at 0
//   - Each time a queued function is invoked, pass it the CURRENT counter value
//   - After invoking a queued function, increment the counter by 1
//   - If `run` is called again later, it should continue from the last counter value (not reset)
//
// Example behavior (logs show the state passed to each function in order):
// const q = functionQueue();
// q.add((state) => console.log('Function 1:', state));
// q.add((state) => console.log('Function 2:', state));
// q.add((state) => console.log('Function 3:', state));
// q.run(); // 'Function 1: 0', 'Function 2: 1', 'Function 3: 2'
// q.run(); // 'Function 1: 3', 'Function 2: 4', 'Function 3: 5'

function functionQueue() {
  let state = [];
  let counter = 0;

  return {
    add: function (func) {
      console.log(state);
      state.push(func);
      console.log(state);
    },

    run: function () {
      console.log(state);
      for (let i in state) {
        state[i](counter);
        counter++;
        console.log(state);
        console.log(counter);
      }
    },
  };
}

const q = functionQueue();
q.add((state) => console.log("Function 1:", state));
q.add((state) => console.log("Function 2:", state));
q.add((state) => console.log("Function 3:", state));

console.log("First run:");
q.run();

console.log("Second run:");
q.run();
