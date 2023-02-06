// 1st Approach
// function reverseString(str) {

//     var splitString = str.split("");
//     console.log(splitString);

//     var reverseArray = splitString.reverse();
//     console.log(reverseArray);

//     var joinArray = reverseArray.join("");
//     console.log(joinArray);


//     return joinArray;
// }

// console.log(reverseString("hello"));
// 2nd Approach
function reverseString(str) {
    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
        console.log(newString);
    }
  
    return newString; 
}
 
console.log(reverseString('hello'));

