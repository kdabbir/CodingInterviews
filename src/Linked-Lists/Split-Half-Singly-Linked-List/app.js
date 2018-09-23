function LinkedList(){
  this.head = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.push = function(value){
  let newNode = new Node(value);
  if(this.head){
    let currNode = this.head;
    while(currNode.next){
      currNode = currNode.next;
    }
    currNode.next = newNode;
  } else {
    this.head = newNode;
  }
  return this;
}
var sll = new LinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);

//console.log(sll);


const splitHalfSLL = (ll) => {
  let linkedListArr = [];
  if(!ll.head || !ll.head.next) return ll;
  let currHead = ll.head;
  linkedListArr.push(currHead);
  while(currHead.next){
    currHead = currHead.next;
    linkedListArr.push(currHead);
  }
  const halfCount = Math.ceil(linkedListArr.length/2);
  const arrLength = linkedListArr.length;
  const llArr = [new LinkedList(), new LinkedList()];
  for(let i=0; i <= arrLength; i++){
    let currNode = linkedListArr.shift();
    if(currNode) currNodeValue = currNode.value;
    else 
      currNodeValue = null;
    if(i + 1 <= halfCount) {
      llArr[0].push(currNodeValue);
    } else {
      llArr[1].push(currNodeValue);
    }
  }
  return llArr;
};

// //test it
 console.log(splitHalfSLL(sll));
//{head: {value:5, next:{value: 4, next: {value: 3, next: {value:2, next:{value:1, next: null}}}}}}