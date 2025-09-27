// import * as _ from "lodash";

let lucky: number = 33;
console.log(lucky);

const myMap = new Map();

myMap.set("lucky", lucky);

console.log(myMap.get("lucky"));

// function twoSum1(nums: number[], target: number): number[] {
//   // number: index
//   const diffMap = new Map<number, number>();

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];

//     if (diffMap.has(diff)) return [diffMap.get(diff), i];

//     diffMap.set(nums[i], i);
//   }

//   return [];
// }

// console.log(twoSum1([1, 2, 3, 4, 5], 6)); // [1, 3] (returns index of values that sum up to target)


    interface User {
        id: number;
        name: string;
    }

    const userMap: { [key: string]: User } = {};
    userMap["user1"] = { id: 1, name: "Alice" };
    userMap["user2"] = { id: 2, name: "Bob" };

    console.log(userMap["user1"]); // { id: 1, name: "Alice" }
// //objects
// type Style = "bold" | "italic" | 23;

// let font: Style;

// interface Person {
//   first: string;
//   last: string;
//   [key: string]: any;
// }
// const person: Person = {
//   first: "jeff",
//   last: "Delaney",
// };

// const person2: Person = {
//   first: "usain",
//   last: "bolt",
//   fast: true,
// };

// // fucntions
// function pow(x: number, y: number): string {
//   return Math.pow(x, y).toString();
// }

// function pow1(x: number, y: number): void {
//   Math.pow(x, y).toString();
// }
// pow(5, 10);

// //arrays

// const arr: number[] = [];

// arr.push(1);
// // arr.push("23");

// // TUPLESSSSS

// type MyList = [number?, string?, boolean?];

// const arr2: MyList = [];

// arr2.push(1);
// arr2.push("23");
// arr2.push(true);

// // GENERICS

// class Observable<T> {
//   constructor(public value: T) {}
// }

// let x: Observable<number>;

// let y: Observable<Person>;
// let z = new Observable(23);

// twoSum([1,2,3,4,5],6)

// better solution
// find complement (target - current number)
// if you keep track of all complements in a map, and if that complement exists and === target, then a quicker lookup
