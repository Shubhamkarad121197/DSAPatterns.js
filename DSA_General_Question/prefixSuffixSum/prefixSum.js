let arr=[10,20,10,5,15];
function prefixSum(arr){
    let prefixValue=[];
    prefixValue[0]=arr[0];
    for(let i=1;i<arr.length;i++){
        prefixValue[i]=prefixValue[i-1]+arr[i]
    }
    return prefixValue;
}

console.log(prefixSum(arr))