// Problem Description
// You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.

// You are supposed to find out which character occurs the maximum number of times and the number of its occurrence, in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value.

// For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.

// Input format
// Input will contain 1 line containing a string S.

// Output format
// You've to output two things which will be separated by a space: a) The character which occurs the maximum number of times. b) The number of its occurrence.

// Sample Input 1
// Statements are unique.

// Sample Output 1
// e 4

// Explanation
// e occurs 4 times.

let str='Statements are unique'

function mostFrequent(str){
    let newMap=new Map();
    for(let char of str){
        if(newMap.has(char)){
            newMap.set(char,newMap.get(char)+1)
        }
        else{
            newMap.set(char,1)
        }
    }
    let maxChar='';
    let maxCount=0;
    for(let [char,count] of newMap.entries()){
        if(count>maxCount){
            maxChar=char;
            maxCount=count
        }
    }
    return [maxChar,maxCount].join(' ')
}
console.log(mostFrequent(str))