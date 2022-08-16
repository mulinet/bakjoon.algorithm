const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let A = Number(require('fs').readFileSync(filePath).toString().trim());
// if ((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0){
//     console.log(1);
// }else{
//     console.log(0);
// }

((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0) ? console.log(1) : console.log(0);
