let arr = [100, 200, 300, 400];

function maxSubArraySum(arr, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  let windowSum = sum;
  let maxSum = sum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSubArraySum(arr, 2)); 
