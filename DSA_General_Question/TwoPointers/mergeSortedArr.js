// Problem Description
// Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

// Input format
// A single Integer M, that contains the number of elements in the first array.

// A single Integer N, that contains the number of elements in the second array.

// Next Line contains M space Integers of the array nums1.

// Next Line contains N space Integers of the array nums2.

// Output format
// Print the array after merging.

// Sample Input 1
// 3

// 3

// 1 2 3

// 2 5 6

// Sample Output 1
// 1 2 2 3 5 6

// Explanation 1
// The sorted array is returned after merging.

function mergeSortedArr(arr1, arr2) {
  let result = [];
  let i = 0, j = 0;
  let m = arr1.length, n = arr2.length;

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < m) {
    result.push(arr1[i]);
    i++;
  }

  while (j < n) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

let arr1 = [1, 2, 3];
let arr2 = [2, 5, 6];

console.log(mergeSortedArr(arr1, arr2));

