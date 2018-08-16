
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

//ultimate braintwisting solution
function ProductBT(arr){

  var temp = [];


  var product = 1;
  for(var i=0; i<arr.length; i++){
      temp[i] = product;
      product *= arr[i];
      // console.log(product);
  }
  // console.log(temp);

  product = 1;
  for(var i=arr.length-1; i>=0; i--){
      temp[i] *= product;
      product *= arr[i];
     //console.log(product);
     //console.log(temp);

  }

  return temp;
}
console.log(main(input2));