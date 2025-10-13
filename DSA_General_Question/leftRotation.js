// Problem Description
// You are given a array of numbers. Your task is to rotate the given array left(anti-clockwise) by 1 units from the starting index. You are required to return the rotated array.

// Input format
// First line contains an integer n, the size of the array. Second line contains n integers, the elements of the array.

// Output format
// Return the rotated string.

// Sample Input 1
// 1 2 3 4 5

// Sample Output 1
// 2 3 4 5 1

// Explanation
// In the left rotation, the subarray of length 1 from the beginning is [1], this subarray is removed from the beginning and attached to the end of the array(i.e. anti-clockwise).

let arr=[1,2,3,4,5];
function isLeftRotation(arr){
    let tempElement=arr[0]
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i+1]
    }
    arr[arr.length-1]=tempElement

    return arr
}

console.log(isLeftRotation(arr))