// Problem Description
// Given a string, convert lowercase to uppercase without using any inbuilt function.

// Input format
// First line contains a string.

// Output format
// Print the required string.

// Sample Input 1
// hello WOrld

// Sample Output 1
// HELLO WORLD

// Explanation
// Here the lowercase letters in the string "hello WOrld" are converted to uppercase letters resulting in the output "HELLO WORLD".

// Constraints
// Length the string < 100

function capitalizeString(str){
    let result=''
    for(let i=0;i<str.length;i++){
        let charCode=str.charCodeAt(i);
        if(charCode>=97 && charCode<=122){
            charCode-=32
        }
        let capitalizeChar=String.fromCharCode(charCode)
        result+=capitalizeChar
    }
    return result;
}
let str='hello WOrld'
console.log(capitalizeString(str))