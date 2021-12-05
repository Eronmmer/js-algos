// Link to problem -> https://leetcode.com/problems/roman-to-integer
// CATEGORY: strings, loops, easy fuck
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let returnInteger = 0, i = s.length - 1;
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    while(i >= 0) {
        let curr = map[s[i]], prev = map[s[i - 1]];
        if(prev < curr) {
            returnInteger += curr - prev;
            i -= 2;
        } else {
            returnInteger += curr;
            i --;
        }
    }
    return returnInteger;
};