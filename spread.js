const max=Math.max(35, 64, 12, 75, 13);
const numbers=[3, 6, 7, 1, 35, 34, 12, 32, 13];
const arrayMax=Math.max(...numbers);
console.log(...numbers);
console.log(numbers);
console.log(arrayMax);

// use spread operator to copy
const nums=[3, 6, 1,24, 12];
const nums2=nums;
nums2.push(23);
console.log(nums);
console.log(nums2);

// another type
const friend1=[3, 1, 6, 12, 7, 4];
const bondhu=friend1;
const dosto=[...friend1];
console.log(dosto);
friend1.push(45);
console.log(dosto);
console.log(friend1);

// advanced: add extra element
const n1=[...friend1, 777];
console.log(n1);