// Bubble sort
// Complexity = O(n^2) 
// Slow with longer arrays


export function bubbleSort(arr) {
    // loop over the whole array
    for (let i = 0; i < arr.length; i++) {
        // loop over the array but one element ahead
        for (let j = 0; j < arr.length - i - 1; j++) {
            // if left element is greater then the right element => Swap them
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j +1] = temp;
            }
        }
    }
    return arr;
}