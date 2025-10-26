// Problem Description
// Given a string, find the length of the longest substring that contains at most K distinct characters.

// Note:

// Uppercase and Lowercase characters should be considered as different characters.

// There can be numbers and special characters as well.

// Input format
// There are 2 lines of input.

// First-line contains two space-separated integers representing the value of N and K.

// The next line contains the string S of length N.

// Output format
// The length of the longest substring T that contains at most K distinct characters.

// Constraints
// 1 <= N <= 10^5

// 0 <= K <= 256

// Sample Input 1
// 5 3

// abacd

// Sample Output 1
// 4

// Explanation 1
// The longest substring that has 3 distinct characters, "abac", is of length 4.

// Sample Input 2
// 6 3

// Xyyzya

// Sample Output 2
// 5

// Explanation
// There are 2 substrings, "Xyyzy" and “yyzya” which are the longest ones having 3 distinct characters and their length is 5.


//1. Brute Force Solution
function lengthOfLongestSubstringKDistinct(s, k) {
    let maxLen=0;
    for(let i=0;i<s.length;i++){
        let distinct=new Set();
        for(let j=i;j<s.length;j++){
            distinct.add(s[j])
            if(distinct.size<=k){
                maxLen=Math.max(maxLen,j-i+1)
            }
        }
    }
    return maxLen;
}
console.log(lengthOfLongestSubstringKDistinct('abacd',3))//4
console.log(lengthOfLongestSubstringKDistinct('Xyyzya',3))//5
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // Output: 3