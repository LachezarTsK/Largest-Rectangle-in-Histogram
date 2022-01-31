
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {

    const size = heights.length;
    const dummyValue = -1;
    let maxArea = 0;

    const stackIndexes = [];
    stackIndexes.push(dummyValue);

    for (let i = 0; i < size; i++) {
        while (stackIndexes[stackIndexes.length - 1] !== dummyValue && heights[stackIndexes[stackIndexes.length - 1]] >= heights[i]) {
            let currentHeight = heights[stackIndexes[stackIndexes.length - 1]];
            stackIndexes.length--;
            let currentWidth = i - stackIndexes[stackIndexes.length - 1] - 1;
            maxArea = Math.max(maxArea, (currentHeight * currentWidth));
        }
        stackIndexes.push(i);
    }

    while (stackIndexes[stackIndexes.length - 1] !== dummyValue) {
        let currentHeight = heights[stackIndexes[stackIndexes.length - 1]];
        stackIndexes.length--;
        let currentWidth = size - stackIndexes[stackIndexes.length - 1] - 1;
        maxArea = Math.max(maxArea, (currentWidth * currentHeight));
    }
    return maxArea;
};
