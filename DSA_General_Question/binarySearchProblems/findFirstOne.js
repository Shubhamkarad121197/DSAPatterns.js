// Problem Description
// Given a sorted array consisting of 0s and 1s only, find the index of the first 1. If there’s no 1 present in the array, return -1

// Input format
// There are 2 lines of input

// First line will contain a single integer n.

// Next line will contain n space separated integers.

// Output format
// Print the index of first occuring if present, otherwise print -1.

// Sample Input 1
// 4

// 0 0 1 1

// Sample Output 1
// 2
let arr=[0,0,1,1]
function findFirstOne(arr){
    let left=0,right=arr.length-1;
    while(left<right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]==1){
            return mid;
        }
        else if(arr[mid]<1){
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
    return -1;
}


console.log(findFirstOne(arr))