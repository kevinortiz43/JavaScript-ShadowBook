// // twoSum([1,2,3,4,5],6)
// // better solution
// // find complement (target - current number)
// // if you keep track of all complements in a map, and if that complement exists and === target, then a quicker lookup
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
// twoSum1([1,2,3,4,5],6)
