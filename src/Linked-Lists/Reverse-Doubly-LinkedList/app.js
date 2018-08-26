//LinkedList initially is null and later has head and tail nodes in it.

function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev ){
  this.value = value;
  this.prev = prev;
  this.next = next;
}

//Create new nodes.
var Node1 = new Node(100, 'Node2', null);
var Node2 = new Node(200, 'Node3',null);

//Insertion of nodes at head
// PseudoCode:
// - Create new node with value, prev as null and next to current head(this.head).
// - Check Current head. If its empty, make both head and tail with the new node.
// - Else, make current head prev to new node.
// - Make current head to new node.

LinkedList.prototype.addToHead = function(value){
 var newNode =  new Node(value, this.head, null);
  if(this.head){
      this.head.prev = newNode;
  } else {
      this.tail = newNode;
  }
  this.head = newNode;
};

var ll= new LinkedList();
ll.addToHead(100);
ll.addToHead(300);
ll.addToHead(400);
// console.log(ll);

const reverseDoubleLL = (ll) => {
   if(!ll.head && !ll.head.next) return ll;
   var currNode = ll.head;
   ll.tail = currNode;

   while(currNode){
     let temp = currNode.next;
     currNode.next = currNode.prev;
     currNode.prev = temp;
     if(!temp){
      ll.head = currNode;
     }
     currNode = temp;

    }
   return ll;
};

console.log(reverseDoubleLL(ll));   