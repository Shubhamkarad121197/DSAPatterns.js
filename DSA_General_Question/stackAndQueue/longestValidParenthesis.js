// Problem Description
// Given a string S containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Input format
// First line contains a string - The string S.

// Output format
// Print the length of the longest valid substring.

// Sample Input 1
// ()(()(())

// Sample Output 1
// 6

// Explanation
// The last 6 characters of the string forms the longest valid substring i.e. "()(())".

// Constraints
// 0 <= length of string <= 10^5

let str='()(()(())';
function longestValidParenthesis(str){
   let stack=[];
   let maxLen=0
   for(let i=0;i<str.length;i++){
    if(str[i]=='('){
        stack.push(i)
    }
    else{
        stack.pop()
        if(stack.length>0){
            maxLen=Math.max(maxLen,i-stack[stack.length-1])
        }
    }
   }
   return maxLen;
}

console.log(longestValidParenthesis(str))