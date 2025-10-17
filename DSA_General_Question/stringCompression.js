// Implement the function stringCompression() that:

// Accepts a string s as an argument

// Returns

// a compressed string for each group of consecutive repeated characters by replacing the group with the character followed by the number of occurrences.

// the original string if the compressed string is not shorter than the original string


// Note
// You can assume the string contains only uppercase and lowercase letters (a-z).


// Input Format
// A single line containing the string s.


// Output Format
// A single line representing the compressed string as specified. If compression does not reduce the size, return the original string.


// Sample Input 1
// aabccccc


// Sample Output 1
// a2b1c5


let str='aabccccc';

function stringCompression(str){
    let newMap=new Map()
    for(let char of  str){
        if(newMap.has(char)){
            newMap.set(char,newMap.get(char)+1)
        }
        else{
            newMap.set(char,1)
        }
    }
    let newStr='';
    for(let [char,count] of newMap.entries()){
        newStr+=char+count
        
    }
    if(newStr.length>=str.length){
        return str
    }
    return newStr;
}

console.log(stringCompression(str)) //a2b1C5