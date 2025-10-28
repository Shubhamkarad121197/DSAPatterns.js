function mergeSort(arr) {

  if (arr.length <= 1) return arr;

  
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  
  return result.concat(left.slice(i)).concat(right.slice(j));
}


const arr = [23, 45, 12, 67, 34, 89];
console.log("Sorted:", mergeSort(arr));
