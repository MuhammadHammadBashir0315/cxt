function sortArrayDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let inputArray = [3, 2, 7, 4, 6, 9];
let sortedArray = sortArrayDescending(inputArray);
console.log(sortedArray); 
