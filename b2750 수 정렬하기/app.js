const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((item => +item));

/* ---------------------------------
선택 정렬, 중복 제거 set 을 사용하면 백준 코딩 테스트 통과하지 못함.
---------------------------------*/
let set = new Set(input);
let excludeDupArray = [...set];

const solutionASC = (array) => {
    let minIndex, temp;
    for (let i = 0; i < array.length - 1; i++){
        minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    console.log(array.join("\n"));
}

solutionASC(excludeDupArray);


/* ---------------------------------
백준 맞았습니다.
---------------------------------*/
let arr = input.slice(1, input.length);
arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}



