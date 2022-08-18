const fs = require("fs");
const [A, B] = fs.readFileSync(0).toString().trim().split('\n').map(Number);
if(A > 0) B > 0 ? console.log(1) : console.log(4)
if(A < 0) B > 0 ? console.log(2) : console.log(3)