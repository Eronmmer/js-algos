// Link to problem -> https://leetcode.com/problems/trapping-rain-water/
// CATEGORY: Array, two pointers, dynamic programming, stack, monotonic stack

/* BRUTE FORCEEEEE 🥶 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    /* At each index, get the minimum of the maximum of the left and right bars and subtract the current height from it.
    If you get anything greater than 0, add it to the value of total water units.*/
    let ans = 0;
    for(let i = 0; i < height.length; i++) {
        let leftMax = 0, rightMax = 0;
        for(let j = i - 1; j >= 0; j--) {
            leftMax = Math.max(leftMax, height[j]);
        }
        for(let k = i + 1; k < height.length; k++) {
            rightMax = Math.max(rightMax, height[k]);
        }
        const currentWaterUnit = Math.min(leftMax, rightMax) - height[i];
        if(currentWaterUnit > 0) {
            ans += currentWaterUnit
        }
    }
    return ans;
};

/* TWO POINTER APPROACH */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length === 0) return 0;
    let left = 0, right = height.length - 1;
    let leftMax = height[left], rightMax = height[right], res = 0;

    while(left < right) {
        if(leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            res += leftMax - height[left];
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            res += rightMax - height[right];
        }
    }
    return res;
};