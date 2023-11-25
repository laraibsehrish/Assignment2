// Scenario 1 - Modify Array with Methods
let initialArray: number[] = [1, 2, 3, 4, 5];

// push: Add new elements to the end of the array
initialArray.push(6, 7);
console.log("After push:", initialArray);

// pop: Remove the last element from the array
const poppedElement = initialArray.pop();
console.log("After pop:", initialArray, "Popped Element:", poppedElement);

// shift: Remove the first element from the array
const shiftedElement = initialArray.shift();
console.log("After shift:", initialArray, "Shifted Element:", shiftedElement);

// unshift: Add new elements to the beginning of the array
initialArray.unshift(-2, -1, 0);
console.log("After unshift:", initialArray);

// Scenario 2 - Subarray Creation
// splice: Create a subarray by removing elements from the original array
const removedElements = initialArray.splice(2, 3); // Remove 3 elements starting from index 2
console.log("After splice:", initialArray, "Removed Elements:", removedElements);

// slice