// using array
function largeStrArr(strArr) {
    let maxStr= strArr[0];
    let finalLargeStr = strArr[0];
    let finalReverseStrChar="";
    let finalReverseStrWord;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length>maxStr.length) {
            finalLargeStr = strArr[i];
        }
    }
    for (let i = finalLargeStr.length - 1; i>= 0; i--) { 
        finalReverseStrChar += finalLargeStr[i];
        finalReverseStrWord= finalLargeStr.split(" ").reverse().join(" ");
    }
    return {finalReverseStrChar,finalReverseStrWord};
 
}
const strArr = ["Pranto", "Rahim", "Jabed ali", "Karim Ali","I love My Country"];
const largestReverseString = largeStrArr(strArr);

console.log("Large String Reverse Word:",largestReverseString.finalReverseStrWord);
console.log("large String Reverse Charecter:",largestReverseString.finalReverseStrChar);
console.log("large String Reverse Length:",largestReverseString.finalReverseStrChar.length);



