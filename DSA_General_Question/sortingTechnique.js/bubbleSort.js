function bubbleSort(arr) {
  let n = arr.length-1;
  for (let i = 0; i < n ; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([23, 45, 12, 67, 34, 89]));
