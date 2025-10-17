// Problem Description
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words.

// The returned string should only have a single space separating the words.

// Do not include any extra spaces.

// Input format
// String s.

// Output format
// The function should return a string of the words in reverse order concatenated by a single space.

// Sample Input 1
// hello world

// Sample Output 1
// world hello

// Explanation
// The given words after being reversed gives:world hello

// Your reversed string should not contain leading or trailing spaces.

// Constraints
// 1 <= s.length <= 10^5

// s contains English letters (upper-case and lower-case), digits, and spaces ' '.

// There is at least one word in s.
let str='Hello World'

//Only JS Approach
function reverseWordInString(s){
    return s.split(' ').reverse().join(' ')

}

//DSA Approach
function revWordInString(s){
    let splittedString=s.split(' ');
    for(let i=0;i<splittedString.length;i++){
        for(let j=i;j<splittedString.length;j++){
            [splittedString[i],splittedString[j]]= [splittedString[j],splittedString[i]]
        }
    }
    return splittedString.join(' ')
}

console.log(revWordInString(str))
console.log(reverseWordInString(str))