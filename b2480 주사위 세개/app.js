const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map((item => +item));;
// let [a, b, c] = input;

input.sort(function (a, b) {
    return b - a;
});

const [A, B, C] = input;

if (A !== B && A !== C && B !== C) {
    console.log(A * 100);
} else if (A === B && B !== C) {
    console.log(1000 + A * 100);
} else if (B === C && C !== A) {
    console.log(1000 + C * 100);
} else if (C === A && A !== B) {
    console.log(1000 + C * 100);
} else {
    console.log(10000 + A * 1000);
}


// const [A, B, C] = line
// .split(" ")
// .map(Number)
// .sort((a, b) => a - b);

// if (A === B && B === C) {
// console.log(10000 + A * 1000);
// } else if (A === B || B === C) {
// console.log(1000 + B * 100);
// } else {
// console.log(C * 100);
// }
