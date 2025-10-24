// Problem Description
// Given an array, find a non-empty contiguous subarray with the largest sum.

// Input format
// There are 2 lines of input.

// First line contains N, the number of elements in the array.

// Second line contains N space separated numbers, representing the array elements.

// Output format
// A single integer which is the maximum possible contiguous subarray sum

// Constraints
// 1 ≤ N ≤ 10^5

// -10^9 ≤ A[i] ≤ 10^9

// Sample Input 1
// 8

// -2 -3 4 -1 -2 1 5 -3

// Sample Output 1
// 7

// Explanation 1
// The subarray [4 -1 -2 1 5] has sum 7, which is the maximum possible.


// What is Kadane Algorithm when to use?

// Use it when you need to:

// Find the maximum subarray sum

// Detect profit in stock trading problems (similar logic)

// Optimize performance in arrays with both positive and negative numbers

// Solve dynamic programming problems efficiently in O(n) time


let arr=[-2 ,-3, 4, -1, -2, 1, 5, -3];
function maxSumContiguousSubArray(arr){
    let max=arr[0];
    let sum=arr[0];
    for(let i=1;i<arr.length;i++){
        sum=Math.max(sum+arr[i],arr[i])
        max=Math.max(max,sum)
    }
    return max
}

console.log(maxSumContiguousSubArray(arr))