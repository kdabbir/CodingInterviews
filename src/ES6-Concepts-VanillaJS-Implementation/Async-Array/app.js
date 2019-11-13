/**
 * Async array.
 */

function AsyncArray(arr) {
    this._arr = arr;
    this.length = arr.length;
  }
  
  /**
   * Asynchronously get the array item of the
   * given index.
   * @param {number} index - array index of the desired item
   * @param {function} callback - called with the array item
   */
  AsyncArray.prototype.get = function get(index, callback) {
    setTimeout(callback, 0, this._arr[index]);
  };

  /**
   * Async version of Array.prototype.map.
   * @param {AsyncArray} arr
   * @param {function} fn - (item: any) => any
   * @returns {Promise<AsyncArray>}
   */
  function asyncMap(arr, fn) {
    
    const outputMap=[];
    const len = arr.length;
    let counter = 0;
    
    return new Promise((resolve, reject) => {
      for(let i=0; i<len; i++){
        outputMap.push(
          new Promise((resolve, reject) => {
            arr.get(i, item => {
              resolve(fn(item));
            });
          }));
      }
      
      
      Promise.all(outputMap).then((r1, reject1) => {
        return resolve(new AsyncArray(r1));
      });
      
    });
  }



  // Declaration
  const arr = new AsyncArray([1, 2, 3]);
  
  // arr.get(1, item => console.log(item)); // Existing - Prints 2
  
  // Expected result: [2, 4, 6];
  asyncMap(arr, x => x * 2).then(arr_ => console.log('asyncMap:', arr_));
  
  // Expected result: 106
  // asyncReduce(arr, (v, x) => v + x, 100).then(val => console.log('asyncReduce:', val));



  