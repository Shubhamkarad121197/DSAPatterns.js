let str='the quick Brown fox jumps over The lazy dog.'
function capitalizeFirstChar(str){
    let splittedString=str.split(' ');
  
    let newArr=splittedString.map((res)=>res[0].toUpperCase()+res.slice(1))
    return newArr.join(' ')
}

console.log(capitalizeFirstChar(str))