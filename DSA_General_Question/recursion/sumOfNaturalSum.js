// Problem Description
// You are given a positive integer 'N' and you are required to implement a recursive function that calculates the sum of the first 'N' natural numbers.

// Input format
// First line contains an integer - N.

// Output format
// Print the sum of first N natural numbers.

// Sample Input 1
// 10

// Sample Output 1
// 55

// Explanation
// 1+2+3+4+5+6+7+8+9+10 = 55

// Sample Input 2
// 3

// Sample Output 2
// 6

// Explanation
// 1+2+3 = 6

function sumOfNatural(n){
    if(n==0){
        return 0
    }

    return sumOfNatural(n-1)+n;
}

console.log(sumOfNatural(10));