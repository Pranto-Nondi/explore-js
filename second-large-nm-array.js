// find first and second largest num 


//  find max and min
function findMaxMin(arr) {
    let max= arr[0], min = arr[0];

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i]<min) {
            min= arr[i];
        }
    }
    console.log(max);
    console.log(min);
}
const arr2 = [0, -3, 12, -91,1, 10,700, 34, 1, 35, -8,100,500,-400]
findMaxMin(arr2);