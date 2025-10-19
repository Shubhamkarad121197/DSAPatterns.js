// Problem Description
// Given two arrays A and B, write a function to compute their intersection.

// Note:

// Each element in the result should appear as many times as it shows in both arrays.

// The result needs to be in sorted order.

// Input format
// First line contains one integer N denoting the number of elements in array A

// Next line contains N integers denoting the elements of array A

// Next line contains one integer M denoting the number of elements in array B

// Next line contains M integers denoting the elements of array B

// Output format
// Single line containing the intersection elements of the two arrays in sorted order.

// Sample Input 1
// 4

// 1 2 2 1

// 2

// 2 2

// Sample Output 1
// 2 2

// Explanation 1
// Since 2 2 are the only elements present in both the arrays.

function intersectionOfArr(arr1,arr2){
    let newMap=new Map();
    let result=[];
    for(let num of arr1){
        if(newMap.has(num)){
            newMap.set(num,newMap.get(num)+1)
        }
        else{
            newMap.set(num,1)
        }
    }

    for(let num of arr2){
       if(newMap.has(num) && newMap.get(num)>0){
        result.push(num)
        newMap.set(num,newMap.get(num)-1)
       }
    }
    return result
}
let arr1=[ 1, 2, 2, 1];
let arr2=[2,2]
console.log(intersectionOfArr(arr1,arr2))