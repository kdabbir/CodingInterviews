const a = [4,[3,2,5],[6,[5],7],9];
const b = [4, [3,1],1,[[2], 1]]; // 4*1 + 3*2 + 1*2 + 2*3 + 1*2 + 1*1


const arrayDepth = (arr, sum = 0, depth = 1) =>{
    for(let element of arr){
        if(Array.isArray(element)){
           sum += arrayDepth(element, sum, depth+1);
        } else { 
            sum += element * depth;
        }
    }
    return sum;
};

console.log(arrayDepth(b));