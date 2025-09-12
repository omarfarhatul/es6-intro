const max=Math.max(35, 64, 12, 75, 13);
const numbers=[3, 6, 7, 1, 35, 34, 12, 32, 13];
const arrayMax=Math.max(numbers);
console.log(...numbers);
console.log(numbers);
console.log(arrayMax);

// use spread operator to copy
const nums=[3, 6, 1,24, 12];
const nums2=nums;
nums2.push(23);
console.log(nums);
console.log(nums2);