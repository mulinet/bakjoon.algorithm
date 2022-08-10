const input = require("fs").readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString();
console.log(parseInt(input) - 543);
