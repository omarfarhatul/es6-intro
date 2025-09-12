const nums=[1, 4, 7, 2, 3, 8];
for(const num of nums){
    console.log(num);
}

const nowab='Siraj Uddullah';
for(const char of nowab){
    console.log(char);
}


const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 25, 
    isCleaned: true
}
for (const key in glass){
    const value=glass[key];
    console.log(key, value);
}

// optional
const keys=Object.keys(glass);
console.log(keys);
for(const key of keys){
    const value=glass[key];
    console.log(key, value);
}