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

function Spam(str) {
    const spamKeywords = [
      "100% безкоштовно",
      "збільшення продажів",
      "тільки сьогодні",
      "не видаляйте",
      "ххх"
    ];
  const lowercaseStr = str.toLowerCase();
  for (const keyword of spamKeywords) {
    if (lowercaseStr.includes(keyword.toLowerCase())) {
        return true;
      }
    }
  return false;
  }
  const text1 = "Отримайте 100% безкоштовно продукт!";
  const text2 = "Надішліть повідомлення для отримання додаткової інформації";
  const text3 = "Збільшення продажів на 50%!";
  const text4 = "Спеціальна пропозиція"; 
  
  console.log(Spam(text1));
  console.log(Spam(text2));
  console.log(Spam(text3));
  console.log(Spam(text4));
  

