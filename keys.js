const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 25, 
    isCleaned: true
}
console.log(glass);
// all properties name
const keys=Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys);

// all properties values
const values=Object.values(glass);
// [ 'glass', 'golden', 25, true ]
console.log(values);


// array of array, two dimensional array
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 25 ],
//   [ 'isCleaned', true ]
// ]
const entries=Object.entries(glass);
console.log(entries);

delete glass.isCleaned;
// { name: 'glass', color: 'golden', price: 25 }
console.log(glass);

// delete using destructuring
const {isCleaned, ...shortGlass}=glass;
// { name: 'glass', color: 'golden', price: 25 }
console.log(shortGlass);


// freeze. Not chage or add anything
Object.freeze(glass);
glass.source='Bangladesh';
console.log(glass);