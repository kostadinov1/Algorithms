
// Quick Sort
// Sorts the array in place



function quickSort(arr, left=0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
    
    return arr;
}

 // divide the array in two parts
 // separate the elements with the values smaller or greater than the pivot
function partition(arr, left, right) {
    let pivotValue = arr[right];
    let partIndex = left;
    // loop over portion of the array between the left and right values
    for (let i = left; i < rightl; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partIndex);
            partIndex++;
        }
    }
    swap(arr, right, partIndex);
}

// Another Version
function notSoQuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    return [...notSoQuickSort(left), pivot, ...notSoQuickSort(right)]
}