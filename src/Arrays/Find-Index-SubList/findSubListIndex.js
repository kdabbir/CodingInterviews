

// Implement a method 'find' that will find the starting index (zero based) where the second list occurs as a sub-list in the first list. 
// It should return -1 if the sub-list cannot be found. Arguments are always given, not empty. 
// Sample Input 1 list1 = (1, 2, 3) list2 = (2, 3) 
// Sample Output 1 1 Explanation As second list (2, 3) is sub-list in first list (1, 2, 3) at index 1 
// Sample Input 2 list1 = (1, 2, 3) list2 = (3, 2) 
// Sample Output 2 -1

 /**
  * 
  * @param {LinkedList} list 
  * @param {LinkedList} subList 
  * @return {string}
  */

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