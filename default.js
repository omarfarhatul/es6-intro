// default --> if value is not provided, take this as a default.
function add(n1=56, n2=34){
    const result=n1+n2;
    console.log(n1, n2, result);

    return result;
}
// const sum=add(3, 5);
// const sum=add(3);
const sum=add();


function fullName(first, last){
    const full=first+' '+last;
    console.log(full);
    return full;
}

const name=fullName('Omar', 'Farhatul');