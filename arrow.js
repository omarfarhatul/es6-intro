// function declaration
function add(a, b){
    return a+b;
}
const result=add(5, 23);
console.log(result);

// function expression
const add2 =function(a, b){
    return a+b;
}
const result2=add(35, 23);
console.log(result2);

// arrow function
const add3=(a, b) => a+b;
const result3=add(55, 24);
console.log(result3);

const add4=(n1, n2, n3, n4) => n1+n2+n3+n4
const result4=add4(5, 15, 2, 4);
console.log(result4);

const mul=(n1, n2) => n1*n2;
const result5=mul(3, 6);
console.log(result5);

const sub=(n1, n2) => n1-n2;
const result6=sub(33, 6);
console.log(result6);

// multiply
const multiply=(n1, n2, n3) => n1*n2*n3;
const result7=multiply(7, 3, 6);
console.log(result7);

// single or one patameter
const getAge=(person) => person.age;
const student={name: 'Hossain', age: 77}
const age=getAge(student);
console.log(age);


const getThird = numbers => numbers[2];
const third=getThird([3, 6, 9, 1, 8]);
console.log(third);

const doubleIt =num => num*2;
const n1=doubleIt(4);
console.log(n1);