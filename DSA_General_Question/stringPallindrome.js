function isPallindrome(str){
    let reverseString=str.split('').reverse().join('')
    if(str==reverseString){
        return 'Is Pallindrome'
    }
    else{
        return 'Is Not Pallindrome'
    }
}

console.log(isPallindrome('shubham'))
console.log(isPallindrome('madam'))