// Problem Description
// Given an array of numbers, find GCD of the array elements.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Input format
// First line contains n, the number integers.

// Second line contains n space separated integers.

// Output format
// Return the gcd of array.

// Sample Input 1
// 4

// 4 6 8 16

// Sample Output 1
// 2

// Explanation
// gcd(4,6,8,16) = 2, as 2 is the greatest number that divides all four numbers

// Constraints
// 2 <= n <= 10^3

// 1 <= nums[i] <= 10^3

// Crio Methodology - Problem Approach


function gcd(a,b){
    if(b==0){
        return a;
    }
    return gcd(b,a%b)
}

function gcdOfArr(arr){
    let result=0
    for(let i=0;i<arr.length;i++){
        result=gcd(result,arr[i])
    }
    return result;
}
let arr=[4, 6, 8, 16];
console.log(gcdOfArr(arr))