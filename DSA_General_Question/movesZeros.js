// Given an array A, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Input format
// First line will contain a single integer N representing the size of array

// Next line will contain N space separated integers representing the array A.

// Output format
// First line should contain N space separated integers.

// Sample Input 1
// 2

// 0 1

// Sample Output 1
// 1 0

// Constraints:
// 1<=N<=200000

// 0<=A[i]<=100000

// Crio Methodology - Problem Coding
// Try coding on your own before checking the below video

//Brute force Approach
let arr=[0,1];

function moveZeros(arr){
    let nonZero=[]
    let zero=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            nonZero.push(arr[i])
        }
        else{
            zero.push(arr[i])
        }
    }

    return [...nonZero,...zero]
}

console.log(moveZeros(arr))


//Optimize Approach
let arr1=[1,2,3,0,4,6,0,8,0];
function moveZerosOptimal(arr){
    let position=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
          [arr[position],arr[i]]=[arr[i],arr[position]]
          position++
        }
    }
    return arr;
}

console.log(moveZerosOptimal(arr1))

//  Space: O(1) (no extra arrays)