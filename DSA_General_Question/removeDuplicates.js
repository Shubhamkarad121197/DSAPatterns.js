let arr=[23,45,67,23,67,89];
function removeDuplicate(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let seen=false;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                seen=true;
            }
        }
        if(!seen){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDuplicate(arr))