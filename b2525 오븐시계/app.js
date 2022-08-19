const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [H, M] = input[0].split(' ').map((item => +item));
let addM = Number(input[1]);

M = M + addM;
while (M >= 60) {
    M = M - 60
    H = H + 1;
}

if (H >= 24){
    H = H == 24 ? 0 : H - 24
}

console.log(H,  M);


