let arr = [5, 7, 7, 8, 8, 10];
let target = 8;

function findFirstAndLastIndex(arr, target) {
    function findFirst() {
        let left = 0, right = arr.length - 1;
        let first = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                first = mid;
                right = mid - 1; 
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return first;
    }

    function findLast() {
        let left = 0, right = arr.length - 1;
        let last = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                last = mid;
                left = mid + 1; 
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return last;
    }

    return [findFirst(), findLast()];
}

console.log(findFirstAndLastIndex(arr, target)); 
