/**
Problem: 
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

URL: https://leetcode.com/contest/weekly-contest-105/problems/reverse-only-letters/


 */

/**
 * @param {string} S
 * @return {string}
 */var reverseOnlyLetters = function(S) {
    let str = [], res = '';
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
		
// 1. Get all strings without special characters.
    for(let i=0; i<S.length; i++) {
        const cur = S[i];
        const isLetter = alphabet.indexOf(cur.toLocaleLowerCase()) > -1;
        if(isLetter) str.push(cur);
    }
		
// 2. Reverse it.
    str.reverse();
    
// 3. Second pass - Just keep constructing final string.
    for(let i=0; i<S.length; i++) {
        const cur = S[i];
        const isLetter = alphabet.indexOf(cur.toLocaleLowerCase()) > -1;
        if(isLetter) {
            res += str.shift();
        } else {
            res += cur;
        }
    }

    return res;
};
//console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); //"j-Ih-gfE-dCba"
//console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); //"Qedo1ct-eeLg=ntse-T!"
console.log(reverseOnlyLetters("z<*zj"));//"j<*zz"

//console.log(reverseOnlyLetters("ab-cd")); //"dc-ba"
