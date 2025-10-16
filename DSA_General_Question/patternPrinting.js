// Problem Description
// Implement the function patternPrintingI() that

// Accepts a number n as an argument

// Returns an array of strings representing a triangle-shaped pattern with n rows using * where the starting row will have one * and will increment by one for each row after it.


// Example: if n = 4 pattern will be:

// image


// Note
// Make sure there is a space

// Input format
// First line contains an integer n - Number of rows.


// Output format
// Return an array of strings with each element in the array representing a row of the pattern.


// Sample Input 1
// 4


// Sample Output 1
// image


// Explanation
// In the first row, there is 1 '*' character.

// In the second row, there are 2 '*' characters separated by space.

// In the third row, there are 3 '*' characters separated by space.

// In the fourth row, there are 4 '*' characters separated by space

// So, the pattern forms a triangle shape where each row has an increasing number of '*' characters, starting from 1 in the first row and incrementing by 1 in each subsequent row until reaching 4 in the fourth row, which corresponds to the value of n.


function printPyramid(n){
    let result=[]
    for(let i=1;i<n;i++){
        let row=''
        for(let j=0;j<i;j++){
            row+='*'+" "
        }
        result.push(row)
    }
    return result;
}
console.log(printPyramid(5))