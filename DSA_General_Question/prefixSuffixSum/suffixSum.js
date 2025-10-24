let arr=[10,20,10,5,15];

function suffixSum(arr){
    let suffixValue=[]
    suffixValue[arr.length-1]=arr[arr.length-1]
    for(let i=arr.length-2;i>=0;i--){
        suffixValue[i]=suffixValue[i+1]+arr[i]
    }
    return suffixValue;
}

console.log(suffixSum(arr))