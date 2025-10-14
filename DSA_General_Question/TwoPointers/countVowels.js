// Input format
// First line contains the given string.

// Output format
// Print the total number of vowels.

// Sample Input 1
// language


function countVowels(word){
    let vowels=new Set(['a','e','i','o','u',"A",'E','I','O','U']);
    let left=0,right=word.length-1;
    let count=0
    while(left<right){
        if(vowels.has(word[left])) count++
        if(vowels.has(word[right])) count++

        left++;
        right--;
    }
    return count
}

console.log(countVowels('language'))