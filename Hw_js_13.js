let str1 = "Hello world"
let str2 = "Hello my web-31";
console.log(`str1 - ${str1}, 
str2 - ${str2}`)

function string(str1, str2) {
    const line1 = str1.length;
    const line2 = str2.length;
    if (line1 > line2) {
        return 1;
    } else if (line1 < line2) {
        return -1;
    } else {
        return 0;
    }
}
const result = string(str1, str2);
console.log(result);

let str3 = "apple";
function upper(str3) {
    const firstChar = str3.charAt(0).toUpperCase();
    const restOfString = str3.slice(1);{
        return firstChar + restOfString;
    }
}
str3 = upper(str3);
console.log(str3);

function findVowels (str2){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let count = 0;
    for (i = 0; i < str2.length; i++){
        const char = str2[i]
        if (vowels.includes(char)){
            count++
        }
    }
    return count
}
const result1 = findVowels(str2);
console.log(`Vowels - (${result1}) in str2`);

