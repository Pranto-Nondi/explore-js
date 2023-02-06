// separate positive and negative elements in an array using javascript
function arraySeparate(arr) {
    const positiveArr = [];
    const negativeArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
           positiveArr.push(arr[i]);
        }
        else {
             negativeArr.push(arr[i]);
        }
    }
    return {positiveArr, negativeArr};
}
const arr = [-1, -2, -3, 5, 6, 4,-8];

const arraySeparatly=arraySeparate(arr);
console.log(arraySeparatly.positiveArr);
console.log(arraySeparatly.negativeArr);

// separate positive and negative numbers in an array using javascript
// function arraySeparate(arr) {
//     let positiveCount = 0;
//     let negativeCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//          positiveCount++;
//         }
//         else {
//             negativeCount++;
//         }
//     }
//     return { positiveCount,negativeCount };
// }
// const arr = [-1, -2, -3, 5, 6, 4];

// const arraySeparatly=arraySeparate(arr);
// console.log("Positive Count:",arraySeparatly.positiveCount);
// console.log("Negative Count:",arraySeparatly.negativeCount);



