
var encodeInBase7 = function(input) {
  if(!input) return '0';  
  let ruleSet = ['0','1','2','3','4','5','6'];
  let outputStr = '';
  while(input > 1){
    let matchedRuleString = ruleSet[parseInt(input%7)];
    outputStr+=matchedRuleString;
    input = input/7;
  }
  return outputStr.split('').reverse().join('');
};

console.log(encodeInBase7(384605)); //3161204
console.log(encodeInBase7(0)); //0
console.log(encodeInBase7(100)); //202
console.log(encodeInBase7(9999)); //41103
