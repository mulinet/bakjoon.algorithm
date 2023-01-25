const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n').map((item => +item));
let input = fs.readFileSync(filePath).toString().split('\n');
let returnArray = [];

for (let i = 0; i < input.length; i++) {
    // console.log(input[i]);
    if (input[i].indexOf("push") >= 0){                             //push
        returnArray.push(Number(input[i].split(" ")[1].toString()));
    }else if (input[i].indexOf("pop") >= 0){                        //최상위 pop, print
        returnArray.length > 0 ? returnArray.pop() : console.log() 
        console.log(returnArray[returnArray.length-1]);
    }else if (input[i].indexOf("top") >= 0){                        //최상위 출력
        // console.log(returnArray[returnArray.length-1]);
    }

}