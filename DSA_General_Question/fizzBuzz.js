// Problem Description
// Implement the function fizzBuzz() that:

// Accepts a number argument n
// Write a program that outputs the string representation of numbers from 1 to N,

// For multiples of three, it should output "Fizz" instead of the number.

// For multiples of five, output "Buzz" instead of the number.

// For numbers that are multiples of both three and five, output "FizzBuzz".

// For numbers that are multiples of neither three nor five, output the number itself as a string.

// Write a program that outputs the string representation of numbers from 1 to N.

// But for multiples of three it should output "Fizz" instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Input format
// First line contains an integer representing the value of N.

// Output format
// Return an array of strings where each string is either Fizz (for multiples of 3 and NOT 5) or Buzz (for multiples of 5 and NOT 3) or FizzBuzz (for multiples of BOTH 3 and 5) or an integer (For multiples of NEITHER 3 NOR 5).

let n=15;
function fizzBuzz(n){
    let result=[]
    for(let i=0;i<=n;i++){
        if(i%3==0 && i%5==0){
            result.push('FizzBuzz')
        }
        else if(i%3==0){
            result.push("Fizz")
        }
        else if(i%5==0){
            result.push('Buzz');
        }
        else{
            result.push(i)
        }
    }
    return result;

}

console.log(fizzBuzz(n))