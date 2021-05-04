// Link to challenge -> https://leetcode.com/problems/backspace-string-compare/

// naive solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sArr = [], tArr = [];
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char === "#") {
            sArr.pop();
        } else {
            sArr.push(char);
        }
    }
    for(let i = 0; i < t.length; i++) {
        let char = t[i];
        if(char === "#") {
            tArr.pop();
        } else {
            tArr.push(char);
        }
    }
    return sArr.join("") === tArr.join("");
};

// more optimized solution. Linear time, constant space
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare2 = function(s, t) {
    let i = s.length - 1, j = t.length - 1;
    let skipsS = 0, skipsT = 0;

    while(i >= 0 || j >= 0) {
        while(i >= 0) {
            if(s[i] === "#") {
                skipsS++; i--;
            } else if(skipsS > 0) {
                skipsS--; i--;
            } else {
                break;
            }
        }
        while(j >= 0) {
            if(t[j] === "#") {
                skipsT++; j--;
            } else if(skipsT > 0) {
                skipsT--; j--;
            } else {
                break;
            }
        }
        // check that at the end of the two loops through s & t, the current chars are the same
        if(i >= 0 && j >= 0 && s[i] !== t[j])
            return false;
        // check that the current length of the acceptable chars are equal
        if((i >= 0) !== (j >= 0))
            return false;
        i--; j--;
    }
    return true;
};
