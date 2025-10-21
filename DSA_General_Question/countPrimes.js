// Problem Description
// Count the number of prime numbers less than a non-negative number, n.

// Input format
// Single line containing one integer N

// Output format
// Single line containing one number denoting the number of prime numbers less than N

// Sample Input 1
// 10

// Sample Output 1
// 4

// Explanation
// There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Constraints
// 1<=N=100000


function isPrime(n){
    if(n<=1){
        return false;
    }

    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

function countPrime(n){
    let result=new Set()
    for(let i=2;i<=n;i++){
        if(isPrime(i)){
             result.add(i)
        }
    }
    return result.size;
}

console.log(countPrime(10))