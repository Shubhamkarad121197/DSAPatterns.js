let arr=[23,45,12,67,34,89];

function quickSort(arr){
    let left=[];
    let right=[];
    if(arr.length<=1){
        return arr
    }
    let pivot=arr[0]
    for(let i=1;i<arr.length;i++){
        if(pivot>arr[i]){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort(arr))