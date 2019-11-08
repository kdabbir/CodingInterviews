
var countAndSay = function(n) {
  let str = '1';
  for(let i=1; i<n; i++){
      let strArr = str.split('');
      str = '';
      let count = 1;
      for(let j=0; j<strArr.length; j++){
          if(strArr[j]==strArr[j+1]){
              count++;
          } else {
              str += count + strArr[j];
              count = 1;
          }
      }
  }
  return str;
};