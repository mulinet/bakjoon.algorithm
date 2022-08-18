const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map((item) => +item);
let [H, M] = input;
//1. 입력받은 "분"에서 -45분 가감한다.
//2. 가감한 "분" (-) 인 경우 "시간"을 -1 가감한다.
M = M - 45;
if (M < 0){
    M = M + 60;
    H = H - 1;
    if (H < 0){
        H = 23;
    }
}
console.log( H + " " + M);