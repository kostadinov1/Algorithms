
// Insertion sort
// Quadratic Time Complexity O(n^2)

export function insertionSort(arr) {
    // Start the loop at the second element
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let previous = i - 1;
        // while the previous index is greater than the current value
        // and move the previos value to the right
        while (previous > -1 && current < arr[previous]) {
            // move left to find smaller value
            arr[previous + 1] = arr[previous]
            previous--;
        }
        // insert the current element
        arr[previous + 1] = current;

    }
    return arr;
}