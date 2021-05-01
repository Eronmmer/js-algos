// Link to challenge -> https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1.length !== s2.length)
        return false;
    if(s1 === s2)
        return true;
    let count = 0, firstIdx, secondIdx;
    for(let i = 0; i <= s1.length; i++) {
        if(s1[i] !== s2[i]) {
            if(firstIdx == undefined) {
                firstIdx = i
            } else if(secondIdx == undefined) {
                secondIdx = i;
            }
            count++;
        }
    }
    return count == 2 && s1[firstIdx] === s2[secondIdx] && s2[firstIdx] === s1[secondIdx];
};