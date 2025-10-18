// Problem Description
// Given a string, write a program to check if it consists of equal number of vowels and consonants.

// Input format
// First line contains an string str consisting of lowercase english alphabets.

// Output format
// Return true if the string contains equal number of vowels and consonants else return false.

// Sample Input 1
// ab

// Sample Output 1
// true

// Explanation
// string "ab" contains one vowel (a) and one consonant (b).

// Constraints
// 1 <= str.length <= 10^5


function isEqualVowelsConsonants(str){
    let vowels= new Set(['a','e','i','o','u','A','E','I','O','U'])
    let vowelsCount=0
    let consonantCount=0

    for(let char of str){
        if(vowels.has(char)){
            vowelsCount++;

        }
        else{
            consonantCount++
        }
    }
    if(vowelsCount===consonantCount){
        return true;
    }
    return false;
}

console.log(isEqualVowelsConsonants('ab'))
console.log(isEqualVowelsConsonants('bee'))
