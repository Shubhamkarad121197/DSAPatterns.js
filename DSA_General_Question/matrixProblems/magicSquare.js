// Given a matrix of dimension nxn having elements 1 to nxn distinct elements. Check whether the matrix is magic square or not.

// Magic square is a square that has the same sum of rows, columns and diagonals.

// Input format
// First line contains integer n.

// In next n lines each line contains n elements.

// Output format
// Print "Yes" if it is a magic square , "No" otherwise.

// Sample Input 1
// 3

// 4 9 2

// 3 5 7

// 8 1 6

// Sample Output 1
// Yes

// Explanation
// All rows, columns and diagonals have sum 15.

// Constraints
// 1 <= n <= 100

// 1 <= element of matrix <= n*n

function checkMagicSquare(n,mat){
    let sum=0
    
    //first row sum
    for(let i=0;i<n;i++){
        sum+=mat[0][i]
    }

    //sum for each row
    
    for(let i=0;i<n;i++){
        let rowSum=0
        for(let j=0;j<n;j++){
            rowSum+=mat[i][j]
        }
        if(sum!=rowSum){
            return false
        }
    }
     //sum for each column
    
    for(let j=0;j<n;j++){
        let colSum=0
        for(let i=0;i<n;i++){
            colSum+=mat[i][j]
        }
        if(sum!=colSum){
            return false
        }
    }
    let primaryDiagonal=0
    for(let i=0;i<n;i++){
      primaryDiagonal+=mat[i][i]
    }
    if(primaryDiagonal!=sum){
        return false;
    }

    let secondaryDiagonal=0
    for(let i=0;i<n;i++){
        secondaryDiagonal+=mat[i][n-i-1]
    }
    if(secondaryDiagonal!=sum){
        return false
    }

    return true
}

let mat = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];

console.log(checkMagicSquare(3,mat))