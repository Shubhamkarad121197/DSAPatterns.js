// Problem Description
// Given an array of positive and negative numbers, you need to find if there is any subarray with 0 sum.

// Note: A subarray of an array is a set of contiguous elements having a size of at least 1.

// Input format
// First line contains a single integer T denoting the number of test cases.

// For each test case, an integer N will be given on one line and the next line will contain the N numbers of the array.

// Output format
// For each test case, print "Yes" if a subarray exists and "No" otherwise, on a single line.

// Constraints
// 1 <= T <= 1000

// 1<= N <= 100000

// Sum of N for all test cases will be <=200000

// -10^5 <= Array element values <= 10^5

let arr=[4, 2, -2, 5];
let arr1=[3, 2 ,-1];

function subArrayWithSumZero(arr){
    debugger;
    let sum=0;
    let subArr=new Set()
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        if(sum==0||subArr.has(sum)){
            return "Yes"
        }
        subArr.add(sum)
    }
    return 'No';
}

console.log(subArrayWithSumZero(arr))
console.log(subArrayWithSumZero(arr1))