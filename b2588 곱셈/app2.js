const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [firLine, secLine] = fs.readFileSync(filePath).toString().trim().split('\n');
const [b1, b2, b3] = secLine.split('');

for (let i = [b1, b2, b3].length-1; i >= 0; i--) {
    console.log(parseInt([b1, b2, b3][i]) * firLine);
}
console.log(firLine * secLine);
