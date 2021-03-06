// To modify array such that each element is multiplied with other values.

const input2 = [1,2,3,4,0,5,6];

const main = (numbers) => {
  // one iteration to get product of whole array

  const arrayProduct = numbers.reduce( (product, value) =>  product * (value === 0 ? 1 : value), 1);
  // one iteration to map new array values by dividing 
  // full array product by current value
  return numbers.map( (value) => {
    if(value ===0) return 0;
    return arrayProduct / value
  });
}

// Multiplying from left and right of array
function ProductBT(arr){

  var temp = [];

  var product = 1;
  for(var i=0; i<arr.length; i++){
    if(arr[i]!=0){
      temp[i] = product;
      product *= arr[i];
      // console.log(product);
    } else { 
      temp[i] = 0;
    }
  }
  // console.log(temp);

  product = 1;
  for(var i=arr.length-1; i>=0; i--){
    if(arr[i]!=0){
      temp[i] *= product;
      product *= arr[i];
     //console.log(product);
     //console.log(temp);
    }
  }

  return temp;
}
console.log(ProductBT(input2));