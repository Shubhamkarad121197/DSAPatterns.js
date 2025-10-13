// Given an array of integers, write a program to find the sum of the minimum and maximum values of the array.

// Input format
// First line contains an integer N, the size of the array

// Second line contains the integers present in the array

// Output format
// Return expected integer

// Sample Input 1
// 5

// 10 15 4 5 19

// Sample Output 1
// 23

// Explanation
// The minimum and maximum values of the array are 4 and 19 respectively, totaling 23

// Sample Input 2
// 3

// 10 10 10

// Sample Output 2
// 20

function minMaxArray(arr) {
    if(arr.length==0){
        return 0;
    }
    let minNum=arr[0];
    let maxNum=arr[0];

    for(let i=1;i<arr.length;i++){
      minNum=Math.min(minNum,arr[i]);
      maxNum=Math.max(maxNum,arr[i]);
    }
    return (minNum + maxNum);
 
   
}
let arr=[10, 15, 4, 5 ,19];
console.log(minMaxArray(arr))