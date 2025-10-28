// Problem Description
// Find the minimum difference possible between any two elements in the given array.

// Input format
// There are 2 lines of input.

// First line will contain a single integer n representing the size of the array.

// Second line will contain n space separated integers representing the array.

// Output format
// Output the answer in single line.

// Sample Input 1
// 3

// 1 2 4

// Sample Output 1
// 1

let arr=[1,2,4];
function findMinDiff(arr){
    arr.sort((a,b)=>a-b)
    let minDiff=Infinity;
    for(let i=1;i<arr.length;i++){
        minDiff=Math.min(minDiff,arr[i]-arr[i-1])
    }
    return minDiff;
}
console.log(findMinDiff(arr))