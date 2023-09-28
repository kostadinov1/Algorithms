


// Finds the smallest element in the array and exchanges it with the begining

export function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        // looping for the minimum value 
        for (let j = 0; j < arr.length; j++) {
            // if min value !== current value - swap them
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        // if min value !== current value - swap them
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}