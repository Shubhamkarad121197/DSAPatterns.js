let arr=[23,45,12,67,34,89];

function isNormalSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]<arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    return arr;
}

console.log(isNormalSort(arr))