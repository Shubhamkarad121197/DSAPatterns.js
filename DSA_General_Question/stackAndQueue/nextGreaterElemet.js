let arr = [1, 3, 2, 4];
let newArr=[]
function nextGreaterElement(arr){
    for(let i=0;i<arr.length;i++){
        let nextGraterInt=-1;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[i]){
                nextGraterInt=arr[j];
                break;
            }
        }
        newArr.push(nextGraterInt)
    }
    return newArr;
}

console.log(nextGreaterElement(arr))


function optimizeNextGreaterElement(arr){
    let stack=[];
    let n=arr.length
    let newArr=new Array(n).fill(-1);

    for(let i=0;i<arr.length;i++){
        while(stack.length && arr[i]>arr[stack[stack.length-1]]){
            let index=stack.pop();
            newArr[index]=arr[i]
        }
        stack.push(i)
    }

    return newArr;
    
}
console.log(optimizeNextGreaterElement(arr))
