// var: no reason to use var
// let: allow it to ressign
// const: do not allow it to reassign

const money=25;
const rich=money+25;
console.log(rich);


let count=0;
count=count+15;
console.log(count);


// numbers of array
const numbers=[35, 23, 75, 2, 4, 77, 32];
numbers[3]=46;
numbers.push(4, 7, 9);
console.log(numbers);