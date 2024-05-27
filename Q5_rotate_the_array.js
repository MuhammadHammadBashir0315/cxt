function rotateArrayRight(arr) {
    if (arr.length === 0) {
        return arr;
    }
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}
let inputArray = [3, 8, 9, 7, 6];
let rotatedArray = rotateArrayRight(inputArray);
console.log(rotatedArray); 
