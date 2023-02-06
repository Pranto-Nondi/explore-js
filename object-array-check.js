
function checkObject1(arr) {

    const result = Array.isArray(arr);
    console.log(result);

    if (result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not  an array.`);
    }

}

const array = [1, 2, 3];

checkObject1(array);