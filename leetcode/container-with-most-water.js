// Link to problem -> https://leetcode.com/problems/container-with-most-water
// CATEGORY: Array, two pointers, greedy
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0, leftPointer = 0, rightPointer = height.length - 1;
    while(leftPointer < rightPointer) {
        let area = Math.min(height[leftPointer], height[rightPointer]) * Math.abs(leftPointer - rightPointer);
        maxArea = Math.max(area, maxArea);
        if(height[leftPointer] < height[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }
    return maxArea;
};