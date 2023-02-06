
function sumArray(Array) {
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
        sum += Array[i];
    }
    return sum;
}
console.log(sumArray([1, 4, 0, 9, -3]));