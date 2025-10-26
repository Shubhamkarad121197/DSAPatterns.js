// Problem Description
// Given a string, find the length of the longest substring which has no repeating characters.

// Input format
// Input is a string.

// Output format
// Output is an integer representing the longest substring with no repeating characters.

// Sample Input 1
// aabcccbcb

// Sample Output 1
// 3

// Explanation 1
// "abc" is the longest substring with no repeating characters.

// Sample Input 2
// cdddddd

// Sample Output 2
// 2

// Explanation 2
// "cd" is the longest substring with no repeating characters.

// Crio Methodology - Problem Approach
// Brainstorm some approaches for solving the problem before viewing the video

function lengthOfLongestSubstring(s) {
  let maxLen=0;
  for(let i=0;i<s.length;i++){
    for(let j=i;j<s.length;j++){
        const substring=s.slice(i,j+1)
        if(isUnique(substring)){
            maxLen=Math.max(maxLen,substring.length)
        }
    }
  }
  return maxLen;
}


function isUnique(str) {
  const set = new Set(str);
  return set.size === str.length;
}



console.log(lengthOfLongestSubstring("abcabcbb")); //  3
console.log(lengthOfLongestSubstring("bbbbb"));    //  1
console.log(lengthOfLongestSubstring("pwwkew"));   //  3



//Optimal Solution
function lengthOfLongestSubstringOptimal(s){
    let left=0,maxLen=0;
    let set=new Set();
    for(let right=0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left])
            left++;
        }
        set.add(s[right]);
        maxLen=Math.max(maxLen,right-left+1)
    }
    return maxLen;
}
console.log(lengthOfLongestSubstringOptimal("abcabcbb"));
console.log(lengthOfLongestSubstringOptimal("bbbbbb"));
console.log(lengthOfLongestSubstringOptimal("pwwkew"));