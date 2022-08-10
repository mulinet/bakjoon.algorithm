let inArray = require("fs").readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString();
inArray = inArray.split(' ').map((item) => +item);
const solution = (inParaArray) => {
    let array = [1,1,2,2,2,8];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] - inParaArray[i]);
    }
}
solution(inArray);

