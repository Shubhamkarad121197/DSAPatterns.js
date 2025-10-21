// Problem Description
// Given a number, return the reverse of that number.

// Input format
// A single integer N.

// Output format
// Reverse the number and return the number. Note number must start with (1-9) digits only unless it is a single digit number.

// Sample Input 1
// 15

// Sample Output 1
// 51

// Explanation
// 15 when reversed would be converted to 51

// Sample Input 2
// 7

// Sample Output 2
// 7

// Explanation


function reverseNo(n){
    let rev=0;
    while(n>0){
        rev=rev*10+n%10;
        n=Math.floor(n/10)
    }
    return rev;
}

console.log(reverseNo(123))