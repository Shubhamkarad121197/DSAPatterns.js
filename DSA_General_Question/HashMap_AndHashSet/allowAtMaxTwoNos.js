// Problem Description
// Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Input format
// There are two lines of input.

// First line contains an integer n - Number of elements.

// Second line contains n space separated integers - The array nums.

// Output format
// Print the new length in the first line.

// In the second line print the nums array upto the new length.

// Sample Input 1
// 7

// 2 2 2 3 4 4 9

// Sample Output 1
// 6

// 2 2 3 4 4 9

// Explanation 1
// Your function should return 6 as the element 2 can only be present at most 2 times. So the first 6 elements of array nums should be modified to [2, 2, 3, 4, 4, 9].

// Constraints

function allowAtMaxTwoNos(arr){
    debugger;
   let map=new Map()
   let result=[]
   for(let num of arr){
    if(map.has(num)){
        
        map.set(num,map.get(num)+1)
    }
    else{
        map.set(num,1)
    }

    if(map.get(num)<=2){
        result.push(num)
    }
   }
  

 return result;


}

let arr=[2, 2, 2, 3, 4, 4, 9]
console.log(allowAtMaxTwoNos(arr))