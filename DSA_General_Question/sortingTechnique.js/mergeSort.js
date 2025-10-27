function mergeSort(arr) {
  // Base case: if array has 1 or 0 elements, it's already sorted
  if (arr.length <= 1) return arr;

  // Step 1: Divide into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Step 2: Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Step 3: Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example
const arr = [23, 45, 12, 67, 34, 89];
console.log("Sorted:", mergeSort(arr));
