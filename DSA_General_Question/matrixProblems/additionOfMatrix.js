// Given two matrices of dimension n*m. Add the two matrices and print the resultant matrix.

// Input format
// First line contains two space separated integers n , m.

// In next 2*n lines each line contains m elements in which first n lines are for first matrix next n for second matrix.

// Output format
// Print the resultant matrix.

// Sample Input 1
// 2 3

// 1 2 3

// 4 5 6

// 1 1 1

// 1 1 1

// Sample Output 1
// 2 3 4

// 5 6 7

// Explanation
// The addition of the given two matrices results in the given output.

// Constraints
// 1 <= n,m <= 100

// 0 <= element of matrices <= 100000


function additionOfMatrix(mat1,mat2,m,n){
    let result=[]

    for(let i=0;i<m;i++){
        let row=[]
        for(let j=0;j<n;j++){
            row.push(mat1[i][j]+mat2[i][j])
        }
        result.push(row)
    }
   return result; 
}

let mat1=[[1,2,3],[4,5,6]]
let mat2=[[1,1,1],[1,1,1]]

console.log(additionOfMatrix(mat1,mat2,2,3))