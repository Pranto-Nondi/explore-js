let even = 0;
let odd = 0;
var count = function () {

    for ( let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            even += i;
        } else {
            odd += i;
        }
    }
    console.log('The sum of all even numbers is ' + even + '.');
    console.log('The sum of all odd numbers is ' + odd + '.');
}

count();
