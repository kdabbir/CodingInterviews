const isValidString = (inputString) => { 
  let arrBraces = [];
  for(let char of inputString){
    if(char ==='{' || char === "(" || char=== "[") 
      arrBraces.push(char);
    else if(char === "}") {
        if(arrBraces.pop() !== "{") { return false; }
    } else if(char === "]") {
        if(arrBraces.pop() !== "[") { return false; }
    } else if(char === ")") {
        if(arrBraces.pop() !== "(") { return false; }
    }
  }
  return arrBraces.length ===0;
};



// test-cases:
console.log(isValidString("{{a}}")); //valid
console.log(isValidString("{(123)}")); //valid
console.log(isValidString("((123))")); //invalid
console.log(isValidString("{{{{a}")); //invalid
