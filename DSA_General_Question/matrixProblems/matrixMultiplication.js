function matrixMultiplication(a, b) {
  let rows1 = a.length;
  let cols1 = a[0].length;
  let cols2 = b[0].length;

  let result = [];
  for (let i = 0; i < rows1; i++) {
    result.push(new Array(cols2).fill(0));
  }

  for (let i = 0; i < rows1; i++) {
    for (let j = 0; j < cols2; j++) {
      for (let k = 0; k < cols1; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return result;
}

// Example:
let grid1 = [
  [1, 2],
  [3, 4]
];
let grid2 = [
  [5, 6],
  [7, 8]
];

console.log(matrixMultiplication(grid1, grid2));
