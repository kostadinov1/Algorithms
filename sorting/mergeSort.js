
// Merge sort recursive implementation
// It's used as the built-in JS Array.sort()
// Performance: O(n log n)
// Drawbacks: It does not sort in place and uses a lot of memory

export function mergeSort(arr) {
    const mid = arr.length / 2;
        // base case
        if (arr.length < 2) {
            return arr;
        }
    // break the array in two halves
    const left = arr.splice(0, mid);
    // recursive call itself within the sorting merge function
    return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        // compare the values
        // add them to the arrays
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    // return merged sorted arrays
    return [...arr, ...left, ...right]
}