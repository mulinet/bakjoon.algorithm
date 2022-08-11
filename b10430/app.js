let input = require("fs").readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString();

// create: 2022-08-11
// let inArray = input.split(' ').map((item) => +item);
// console.log((inArray[0]+inArray[1])%inArray[2]);
// console.log(((inArray[0]%inArray[2]) + (inArray[1]%inArray[2])) % inArray[2]);
// console.log((inArray[0]*inArray[1])%inArray[2]);
// console.log(((inArray[0]%inArray[2])*(inArray[1]%inArray[2]))%inArray[2]);

// update: 2022-08-11
let inArray = input.split(' ').map((item) => +item);
let [a,b,c] = inArray;
console.log((a+b)%c);
console.log(((a%c) + (b%c))%c);
console.log((a*b)%c);
console.log(((a%c) * (b%c))%c);
