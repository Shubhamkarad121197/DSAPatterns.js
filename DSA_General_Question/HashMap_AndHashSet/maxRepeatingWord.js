// Problem Description
// Write a program that takes a list of words arr[] as input and returns the most occurring word in arr[].

// It is guaranteed that if there are multiple words with the same frequency, the program should return the lexicographically minimum string among them.

// Input format
// The first line contains an integer N, the number of words in the array.

// The next N lines contain the words in the array.

// Output format
// Return the most occurring word in the array.

// Sample Input 1
// 4

// hello

// world

// crio

// crio

// Sample Output 1
// crio

// Explanation
// In this case, "crio" is the most frequent word, occurring 2 time.

// Sample Input 2
// 5

// crio

// for

// learn

// a

// learn

// Sample Output 2
// learn

// Explanation
// "learn" is the most frequent word in the given array, occurring 2 times.

let arr=["hello","world","crio","crio"];

function maxRepeatingWord(arr){
    let newMap=new Map()
    for(let word of arr){
        if(newMap.has(word)){
            newMap.set(word,newMap.get(word)+1)
        }
        else{
            newMap.set(word,1)
        }
    }
    let maxRepeatingWord=''
    let maxCount=0
    for(let [word,count] of newMap.entries()){
       if(count>maxCount){
        maxRepeatingWord=word
       }
    }

    return maxRepeatingWord
}

console.log(maxRepeatingWord(arr))