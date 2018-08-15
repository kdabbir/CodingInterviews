const isValidString = (inputString) => { 
  let arrBraces = [];
  let isBrace = false;
  for(let char of inputString){
    if(char ==='{') arrBraces.push(char);
    if(char ==='}') {
      isBrace = true;
      if(arrBraces[arrBraces.length-1] === '{') arrBraces.pop();
    }
  }
  if(arrBraces.length ===0 && isBrace) return true;
  return false;
};


// test-cases:
console.log(isValidString("{{a}}")); //valid
console.log(isValidString("{(123)}")); //valid
console.log(isValidString("((123))")); //invalid
console.log(isValidString("{{{{a}")); //invalid
