// demo 1
// function EvenOddSum(arr, n)
// {
//     let even = 0;
//     let odd = 0;
//     for (let i = 0; i < n; i++)
//     {

//         // Loop to find even, odd sum
//         if (i % 2 == 0)
//             even += arr[i];
//         else
//             odd += arr[i];
//     }

//     console.log(("Even index positions sum " + even));
//     console.log( ("Odd index positions sum " + odd));
// }

// // Driver function
//     let arr = [ 1, 2, 3, 4, 5, 6 ];
//     let n = arr.length;

//     EvenOddSum(arr, n);


// demo 2
// function EvenOddSum(arr, n) {
//     let even = 0;
//     let odd = 0;
//     for (let i = 0; i < n; i++) {

//         if (arr[i] % 2 == 0) {
//             even += arr[i];
//         }

//         else {
//             odd += arr[i];
//         }

//     }

//     console.log(("Even elemnts sum " + even));
//     console.log(("Odd elemnts  sum " + odd));
// }


// let arr = [1, 2, 3, 4, 5, 6];
// let n = arr.length;

// EvenOddSum(arr, n);

// demo 3
function evenSum(arr, n) {

    let even = 0;

    for (let i = 0; i < n; i++) {

        if (arr[i] % 2 == 0) {
            even += arr[i];
        }


    }
    return even;

}
function oddSum(arr, n) {

    let odd = 0;
    for (let i = 0; i < n; i++) {

        if (arr[i] % 2 == 1) {
            odd += arr[i];
        }

    }
    return odd;

}
let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;

console.log(evenSum(arr, n));
console.log(oddSum(arr, n));

