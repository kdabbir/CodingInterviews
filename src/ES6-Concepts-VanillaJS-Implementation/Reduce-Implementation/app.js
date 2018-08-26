const arr = [1,2,3,4,5];

// [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
//     return accumulator + currentValue;
// }, 10);

const test = arr.reduce((acc, ele, i, arr) => {
  return acc.concat(ele*2);
}, []);


Array.prototype.myReduce = function (cb,val) {
    let output = 0;
    if(val){
      if(Array.isArray(val)) output = val;
      else  output += val;
    }
    for(let i = 0 ; i < this.length; i++){
      output = cb(output,this[i],i,this);
    }
   return output;
};



const y = arr.myReduce((acc, ele, i, arr) => {
  console.log(i);
  console.log(arr);
  return acc.concat(ele*2);
}, []);

console.log("Reduce Result: ", test);
console.log("MyReduce Result: ", y);


Array.prototype.myReduce = function(cb, initVal) {
    let accumulator = initVal? initVal: undefined;

    for(let i=0; i<this.length; i++) {
        if(accumulator) {
            accumulator = cb.call(undefined, accumulator, this[i], i, this); 
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
};

Array.prototype.myFilter = function(cb) {
    const res = [];
    for(let i=0; i<this.length; i++) {
        if (cb.apply(this[i], i, this)) { // filter has three values: value, index, array hence these values
            res.push(this[i]);
        }
    }
    return res;
};
