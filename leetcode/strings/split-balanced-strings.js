// Link to challenge -> https://leetcode.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let maxBal = 0, R = 0, L = 0;
    for(let i = 0; i < s.length; i++) {
        s[i] === 'R' ? R++ : L++;
        if(R === L)
            maxBal++;
    }
    return maxBal;
};
