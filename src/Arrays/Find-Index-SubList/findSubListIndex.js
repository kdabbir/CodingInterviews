
var findSubListIndex = function(list, subList) {
    let listAsString = linkedListToString(list);
    let subList = linkedListToString(subList);
    return listAsString.indexOf(subList);
};

function linkedListToString(linkedList){
    let outputString = '';
    while(linkedList){
        let curr = linkedList;
        if(curr) outputString+= curr.val;
        curr = curr.next;
    }
    return outputString;
}


//alternate way
// function linkedListToString(linkedList){
//     let queue = [linkedList];
//     let outputString = '';
//     while(queue.length){
//         let curr = queue.shift();
//         if(curr) outputString+= curr.val;
//         if(curr.next) queue.push(curr.next);
//     }
//     return outputString;
// }