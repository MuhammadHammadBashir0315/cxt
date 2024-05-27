function sumOfTwoLargest(arr) {
    if (arr.length < 2) {
        throw new Error("pleae add atleast two values");
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return largest + secondLargest;
}
let inputArray = [3, 7, 1, 5, 11, 19];
let result = sumOfTwoLargest(inputArray);
console.log(result); 
