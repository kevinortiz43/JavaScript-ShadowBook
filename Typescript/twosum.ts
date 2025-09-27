// https://youtu.be/JQmId3YNsvE?si=spCd9sym2UpBwjdv

// brute force nested loop
// parameters (array of number types, target is number type) : return arr of number types
// if don't want to return anything, : void (would also have to get rid of all return statements)
// can also specify value for target in parameter, i.e.
// function twoSum(nums: number[] = [1, 2, 3, 4, 5], target: number = 10): number[] {

function twoSum(nums: number[], target: number): number[] {
  // let answer = [] // if want to give label to return arr, but CAN'T give label in line above

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  // return answer;

  return []; // need to return this at end, as else, in case nothing returns from [i, j]
  // would have error if you don't return an arr (since return specified above)
  // OR if you have arr of str, would also fail since must be arr of nums
}

console.log(twoSum([1,2,3,4,5],6)); // [0, 4] returns index of vals summing up to target

// better solution
// find complement (target - current number)
// if you keep track of all complements in a map, and if that complement exists and === target, then a quicker lookup

function twoSum1(nums: number[], target: number): number[] {
  // number: index
  const diffMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diffMap.has(diff)) return [diffMap.get(diff)!, i];

    diffMap.set(nums[i], i);
  }

  return [];
}

console.log(twoSum1([1, 2, 3, 4, 5], 6)); // [1, 3] (returns index of values that sum up to target)

// Fix: either use a non-null assertion ! or check explicitly (if (prevIndex !== undefined)).

//return [diffMap.get(diff)!, i]; -> non-null assertion
// is doing this:

//destructure explicitly

// const prevIndex = diffMap.get(diff);
// if (prevIndex !== undefined) return [prevIndex, i];

// Two Sum with sorted arr and 2-Pointer technique
// https://youtu.be/IEgp1aRqQ7w?si=ftXHRCVylzRxkoAI

function twoSum2Pointers(nums: number[], target: number): number[] {
  // using left index and right index pointers

  let left = 0;
  let right = (nums.length - 1);

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }
  return [left, right];
}

console.log(twoSum2Pointers([1, 2, 3, 4, 9], 6)) // [2, 4] returns vals of nums summing up to target


// this nested loop would be O(n^2)
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //     }      
    // }


// 3 Sum solution
// https://youtu.be/DhFh8Kw7ymk?si=dDqM064pYhR5TBYQ

// brute force with 3 nested loops 
// time complexity is > O(n^3) too long!
function tripletBr(nums: number[]): number[][] {
  const st: Set<string> = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          // create and sort triplet
          const temp: number[] = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);

          // convert array to string to store in Set (avoid duplicates)
          st.add(temp.toString());
        }
      }
    }
  }

  // convert Set back to array of arrays
  const ans: number[][] = Array.from(st).map(s =>
    s.split(",").map(Number)
  );
  return ans;
}

// Example usage:
console.log('threeSum')
const nums: number[] = [-1, 0, 1, 2, -1, -4];
const nums1: number[] = [0, 1, 1];
const nums2: number[] = [0, 0, 0];

console.log(tripletBr(nums)); // [ [ -1, 0, 1 ], [ -1, -1, 2 ] ]
console.log(tripletBr(nums1)); //   []
console.log(tripletBr(nums2));  // [ [ 0, 0, 0 ] ]        

// alt solution with 2 pointers
// trying to get O(n^2), slightly better than brute force

  function triplet1(nums: number[]): number[][] {
  const st: Set<string> = new Set();

  for (let i = 0; i < nums.length; i++) {
    const hashset: Set<number> = new Set();

    for (let j = i + 1; j < nums.length; j++) {
      const third: number = -(nums[i] + nums[j]);

      if (hashset.has(third)) {
        // Found a triplet
        const temp: number[] = [nums[i], nums[j], third].sort((a, b) => a - b);

        // Store as string to ensure uniqueness
        st.add(temp.toString());
      }

      // Add current number to hashset
      hashset.add(nums[j]);
    }
  }

  // Convert back to number[][] from Set<string>
  const ans: number[][] = Array.from(st).map(s =>
    s.split(",").map(Number)
  );

  return ans;
}

// Example usage:
console.log('threeSum 2 pointers + hashmap')
const numsA: number[] = [-1, 0, 1, 2, -1, -4];
console.log(triplet1(numsA));


// optimal solution with 3 pointers
// https://youtu.be/yZs1Yuhc4FI?si=PmvzOIqkSqqW590i
// AND https://youtu.be/DhFh8Kw7ymk?si=ntPdjOtbpUSG7h6Z

// need sorted array
function threeSum(nums: number[]): number[][] {
    const triplets: number[][] = [];

    // must sort entire arr first
    nums.sort( (a,b) => a-b); // ascending: O(n*logn)

    for (let i = 0; i < nums.length; i++) {

     // i skips duplicates, continues to next unique value
      if (i > 0 && nums[i] === nums[i-1]) continue;
    
      let j = i+1;
      let k = nums.length - 1;

      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum < 0) { // if sum < target sum 0, move j right                                                  
            j++;

        } else if (sum > 0) { // if sum > 0, move k left
            k--;

        } else { // if sum === target sum 0, then found triplet solution
            triplets.push( [nums[i], nums[j], nums[k]]);
            j++;
            k--;
            while (j < k && nums[j] === nums[j-1]) j++;
            while (j < k && nums[k] === nums[k+1]) k++;
        }
    }    
    }
    return triplets;
};

console.log('optimal')
console.log(threeSum([-1,0,1,2,-1,-4])) //

// roughly O(log n) + O(n * n)