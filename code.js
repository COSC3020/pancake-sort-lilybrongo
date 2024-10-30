// Swap elements "flip"
function flip(array, n) {
    let first = 0;
    let last = n - 1;
    while (first < last) {
        [array[first], array[last]] = [array[last], array[first]]; 
        first++;
        last--;
    }
}
// *Use only flip() here to manipulate the array*
function pancakeSort(array) {
    for (let size = array.length; size > 1; size--) {
        let maxIndex = 0;
        // Find the index of the largest element
        for (let i = 1; i < size; i++) {
            if (array[i] > array[maxIndex]) {
                maxIndex = i;
            }
        }
        // Bringing the largest element to the top
        if (maxIndex !== size - 1) {
            // Flip it to the top
            if (maxIndex > 0) {
                flip(array, maxIndex + 1);
            }
          // Then flip it to its correct position
            flip(array, size);
        }
    }
    return array;
}
