// Problem Description
// An array sorted in ascending order is rotated about a pivot unknown to you. Such an array is referred to as a rotated sorted array or a sorted-pivoted array. For example : [1,2,3,4,5] is a sorted array while [3,4,5,1,2] is a rotated sorted array.


// You are given a rotated sorted array, and some integer values. You have to find each value’s location in the array. If the value is present, return the index in which it is stored ( 0 based indexing) , otherwise if not found return -1.


// Function Definition
// Complete the function search in the code editor for a language of your choice.

// search has the following parameters :

// nums : An array of numbers having its values in a rotated sorted order

// target : An integer representing the number to be searched in nums

// search returns :

// int : An integer denoting the index of the target to be searched. If target not present returns -1.


// Assume the array doesn’t have duplicates.

// Input format
// There are Q+3 lines of input.

// First line will have a single integer N denoting the size of the array.

// Second line will contain N space separated integers.

// Third line will contain a single integer Q denoting the number of targets to be searched..

// Next Q lines will have a single integer,X in each line denoting the target value. You have to search for each of these target values in turn.

// Output format
// One line per output for each target search, with -1 or the index at which the integer is found.
let arr = [4, 5, 6, 9, 10, 2, 3];
let targetFirst = 3;

function searchInSortedArr(arr, targetFirst) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === targetFirst) {
            return mid;
        }

        // Left half is sorted
        if (arr[left] <= arr[mid]) {
            if (targetFirst >= arr[left] && targetFirst < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (targetFirst > arr[mid] && targetFirst <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

console.log(searchInSortedArr(arr, targetFirst)); // Output: 6
