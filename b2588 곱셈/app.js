const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let inputArray = fs.readFileSync(filePath).toString().trim().split('\n');
let firLine = parseInt(inputArray[0]);
let secLine = parseInt(inputArray[1]);
let secLineArr = secLine.toString().split('').map((item) => +item);

for (let i = secLineArr.length-1; i >= 0; i--) {
    console.log(parseInt(secLineArr[i]) * firLine);
}
console.log(firLine * secLine);
