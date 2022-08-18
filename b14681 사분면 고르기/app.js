const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : './input.txt';

// let [A, B] = fs.readFileSync(filePath).toString().split('\n').map((item => +item));
// if (A > 0 && B > 0){ console.log("1");}
// else if (A > 0 && B < 0){ console.log("4");}
// else if (A < 0 && B > 0){ console.log("2");}
// else console.log("")

const [A, B] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
if(A > 0) B > 0 ? console.log(1) : console.log(4)
if(A < 0) B > 0 ? console.log(2) : console.log(3)