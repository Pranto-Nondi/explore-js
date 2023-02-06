function replaceStringChar(index, char) {
    const a = str.split("");
    console.log(a);
    a[index] = char;
    return a.join("");
}

const str = "Hello world";
const replaceChar =  replaceStringChar(3, "#");
console.log(replaceChar);