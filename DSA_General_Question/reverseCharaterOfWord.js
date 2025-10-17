// Write a program to reverse the words present in a sentence.

// Input format
// First line contains an string consisting of words separated by spaces.

// Output format
// Return the string with it's words reversed.

// Sample Input 1
// abc def ghi

// Sample Output 1
// cba fed ihg

// Explanation
// abc reversed is cba, def reversed is fed, ghi reversed is igh.

// Constraints
// 1 <= str.length <= 10^5

// Crio Methodology - Problem Approach
// Brainstorm some approaches for solving the problem before viewing the video
let str='I am shubham'
function revereCharOfWord(str){
    let newArr=str.split(' ')
    let result=newArr.map((res)=>res.split('').reverse().join(''))
    
    return result.join(' ')

}
console.log(revereCharOfWord(str))