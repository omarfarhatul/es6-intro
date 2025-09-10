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