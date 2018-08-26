const a = [1, [2, [3,4]], 7];

// [1,2,3,4,7]
/*
  
*/

function flatten(arr) {
  let outputArr = [];
  
  for (let i=0 ; i< arr.length; i++){
    const cur = arr[i];
    if(Array.isArray(cur)){
       outputArr = outputArr.concat(flatten(cur));
    } else {
        outputArr.push(cur);
    }
  }
  return outputArr;
}

 console.log(flatten(a));

      
// console.log(d);

console.log(a.toString().split(','));