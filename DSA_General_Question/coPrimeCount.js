// Problem Description
// Given a number n, you have to find the count of the numbers from 1 to n that are coprime to n.

// Input format
// First line contains an integer n - the given number.

// Output format
// Print the total count of coprime numbers.

// Sample Input 1
// 9

// Sample Output 1
// 6

// Explanation
// Numbers coprime to 9 are: 1, 2, 4, 5, 7, 8

function isGCD(a,b){
    if(b==0){
        return a;
    }
    return isGCD(b,a%b);
}

function countCoPrimes(num){
    let result=0;
    let count=0;
    for(let i=1;i<=num;i++){
        result=isGCD(i,num)
        if(result==1){
            count++;
        }
    }

    return count;
}

console.log(countCoPrimes(9))