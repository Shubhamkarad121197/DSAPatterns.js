// Problem Description
// Partitioning an array means to split an array along an element, such that it divides the array into two parts with some specific property. The element that partitions the array is called the partitioning element.

// Given an array, find the element, partitioning along which, the sum of elements to its left, equals the sum of elements to its right. The partition element itself is to be excluded from both sums.

// Return the index of the partitioning element. If no such element exists, return -1.

// Input format
// There are N+1 lines of input.

// First line will contain a single integer N.

// Second line will contain n space separated integer representing array elements.

// Output format
// Output the index of the partitioning element.

// Constraints
// 2 <= N <= 10^6

// 1 <= Arr[i] <= 10^9

// Sample Input 1
// 4

// 1 4 2 5

// Sample Output 1
// 2

// Explanation 1
// Since 1 + 4 = 5 where 2 is such an element.

let arr=[1, 4, 2, 5];

function equalPartition(n, arr) {
    let prefixSum=[];
    prefixSum[0]=arr[0];
    for(let i=1;i<n;i++)
    {
        prefixSum[i]=prefixSum[i-1]+arr[i]
    }

    let suffixSum=[];
    suffixSum[arr.length-1]=arr[arr.length-1];

    for(let i=n-2;i>=0;i--)
    {
        suffixSum[i]=suffixSum[i+1]+arr[i]
    }

    for(let i=0;i<arr.length;i++){
        if(suffixSum[i]==prefixSum[i]){
            return i;
        }
    }

return -1;
}

console.log(equalPartition(4,arr))

