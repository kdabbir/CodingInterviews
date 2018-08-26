// const input2 = [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
//  ];

const input2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];

/* 
 - For first array, need to iterate to the final element and add it to output array.
 - For all other arrays than last one, iterate the last elements and add it.
 - For last array, add last element and keep on adding till the first element.
 - Keep going back to other arrays except first and add all other elements sequentially except last element.
*/

function spiralOrder(inputArr) {
  if(!inputArr.length) return null;

  let res = [];
  let middleres = [];
  res = res.concat(inputArr.shift());
  for(let i=0; i<inputArr.length; i++) {
      const last = inputArr[i];
      const lastElem = last.pop();
      res.push(lastElem);
      if(i!= inputArr.length-1){
        middleres.push(inputArr[i]);
    }
  }
  res = res.concat(inputArr.pop().reverse());
  middleres.forEach( (innerArr) =>  res.push.apply(res,innerArr));
  return res;
}

console.log(spiralOrder(input2));