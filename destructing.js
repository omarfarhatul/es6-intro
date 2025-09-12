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