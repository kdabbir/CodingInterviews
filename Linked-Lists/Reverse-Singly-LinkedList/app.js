
var LL = {head:{value:2,next:{value:3,next:{value:4,next:null}}}};

function LinkedList(){
  this.head = null;
}
//iterative

const reverseSLL = (LL) => {
  if(!LL.head || !LL.head.next) return LL;

  let nodes = [];
  let current = LL.head;
  while(current){
    nodes.push(current);
    current = current.next;
  }  
  var LL = new LinkedList();
  LL.head = nodes.pop();
  let currentNode = LL.head;
  var node = nodes.pop();
  while(currentNode){
    currentNode.next = node;
    currentNode = currentNode.next;
    node = nodes.pop();
  }
 return LL;
};

console.log(reverseSLL(LL));

//Recursive

const reverseLinkedList = (curr, prev) => {
  if (curr.next) {
    let NewHead = reverseLinkedList(curr.next, curr);
    curr.next = prev;
    return NewHead;
  }
   curr.next = prev;
  // console.log(curr);
  return curr; // base case; return the tail
};


const someList = {
  value: 1,
  next: {
      value: 2,
      next: {
          value: 3,
          next: {
              value: 4,
              next: null
          }
      }
  }
};


reverseLinkedList(someList);