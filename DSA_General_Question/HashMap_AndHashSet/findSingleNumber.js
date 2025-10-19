// Problem Description
// You are given a non-empty array of integers arr, where every element appears twice except for one. Your task is to implement a program that takes the input as an array of integers and returns the element that appears only once.

// Input format
// The input consists of an array of integers nums (1 <= arr.length <= 3 * 10^4), where each element in the array appears twice except for one element which appears only once. The elements in arr are within the range -3 * 10^4 to 3 * 10^4.

// You should use a HashMap-based approach to efficiently identify the element that appears only once in the array.

// Output format
// Return the integer that appears only once in the given array.

// Sample Input 1
// 3

// 2 2 1

// Sample Output 1
// 1

// Explanation
// In the given array, 1 appears only once, so the program should return 1.

// Sample Input 2
// 7

// 2 2 3 3 1 4 4

// Sample Output 2
// 1

// Explanation
// In the given array, 1 appears only once, so the program should return 1.


let arr=[ 2, 2, 3, 3, 1, 4, 4];
function findSingleNumber(arr){

    let newMap=new Map()
    for(let num of arr){
        if(newMap.has(num)){
            newMap.set(num,newMap.get(num)+1)
        }
        else{
            newMap.set(num,1)
        }
    }

    for(let [num,count] of newMap.entries()){
        if(count==1){
            return num
        }
    }
    return -1;
}

console.log(findSingleNumber(arr))