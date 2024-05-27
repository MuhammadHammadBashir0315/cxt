function mostRepeatedNumber(arr) {
    if (arr.length === 0) {
        return null; 
    }
    const frequencyMap = new Map();
    for (let num of arr) {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }
    }
    let mostRepeated = arr[0];
    let maxCount = 0;
    for (let [num, count] of frequencyMap) {
        if (count > maxCount) {
            mostRepeated = num;
            maxCount = count;
        }
    }
    return `${mostRepeated} is repeated ${maxCount} times.`;
}
let inputArray = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
let result = mostRepeatedNumber(inputArray);
console.log(result);
