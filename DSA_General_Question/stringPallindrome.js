//Normal Approach


// function isPallindrome(str){
//     let reverseString=str.split('').reverse().join('')
//     if(str==reverseString){
//         return 'Is Pallindrome'
//     }
//     else{
//         return 'Is Not Pallindrome'
//     }
// }

//optimized Approach
function isPallindromeUsingTwoPointer(str){
    let arr=str.split('')
    let left=0,right=str.length-1;
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    let revString=arr.join('')
     if(str==revString){
        return 'Is Pallindrome'
    }
    else{
        return 'Is Not Pallindrome'
    }
}
console.log(isPallindrome('shubham'))
console.log(isPallindrome('madam'))

console.log(isPallindromeUsingTwoPointer('shubham'))
console.log(isPallindromeUsingTwoPointer('madam'))