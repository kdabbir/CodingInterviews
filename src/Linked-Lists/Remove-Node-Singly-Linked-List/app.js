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

LinkedList.prototype.removeNodeSLL = function(value)  {
  if(!this.head.next || !this.head) return this.head;

  let currNode = this.head;
  let prevNode = null;
  if(currNode.value === value) {
    this.head = this.head.next;
    return sll;
  }

  while(currNode){
    if(currNode.value === value) {
      prevNode.next = currNode.next;
      return sll;
    }
    prevNode = currNode;
    currNode = currNode.next;
  }
  return null;
};


// //test it
 console.log(sll.removeNodeSLL(5));
 console.log(sll);

//{head: {value:5, next:{value: 4, next: {value: 3, next: {value:2, next:{value:1, next: null}}}}}}