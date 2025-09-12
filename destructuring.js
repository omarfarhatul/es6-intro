const actor = {
    name: 'Hossain',
    age: 40,
    Phone: '01784736378',
    money: 24356
}
// if right is an object left side of destructring will be object as well
// use property name as a variable that contains the property value
const {Phone, age: boyos}=actor;

// const phone=actor.Phone;
// const name=actor.naem;
// const age=actor.age;

console.log(Phone);
console.log(boyos);


// array destructuring
const numbers=[45, 64];
const [first, second]=numbers;
const [x, y]=[24, 34];


// advanced
function doubleThem(a, b){
    return [a*2, b*2];
}
const [n1, n2]=doubleThem(6, 7);
console.log(n1, n2);

// Name destructuring
const user = {
    'name': 'Hossain',
    'popularity': 'Mr. Bean'
}
const {name}=user;
console.log(name);