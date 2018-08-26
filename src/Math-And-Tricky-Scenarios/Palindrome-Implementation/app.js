const string = `kayak`;

//iterative
const isPalindrome = (input) => {
    let str = input.toLowerCase().replace(/[\W_]/g,'')
    console.log(str);
    for(let i=0; i< input.length/2; i++){
      if(input[i] !== input[input.length-1-i]){return false} ;
    }
    return true;
};

//recursive

const isPalindromeRec = (input) => {
  let str = input.toLowerCase().replace(/[\W_]/g,'')
  return str === str.split('').reverse().join('');
};

console.log(isPalindrome(string));
console.log(isPalindromeRec(string));
