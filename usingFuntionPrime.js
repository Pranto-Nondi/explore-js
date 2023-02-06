
function test_prime(number) {
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    else if (number > 1) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
               return (`${number} is a not  prime number`);
            }
        }
       return (`${number} is a prime number`);
    }
}
// const number = parseInt(prompt("Enter a positive number: "));
const number = 40;
console.log(test_prime(number));