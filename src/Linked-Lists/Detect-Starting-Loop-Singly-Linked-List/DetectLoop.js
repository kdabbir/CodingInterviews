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

console.log(sll);

//Iterative


module.exports =  findLoopStart = (sll) => {
    var slow = sll.head,
        fast = sll.head;
    while(slow && fast){
       slow = slow.next;
 
       //if hits null, then there is no loop
       if(!fast.next){
          return null;
       }
 
       fast = fast.next.next;
       if(slow == fast){
           slow = sll.head;
           while(slow != fast){
              slow = slow.next;
              fast = fast.next;
           }
           return slow;
       }
   }
}
        

// //test it
 console.log(findLoopStart(sll));
//{head: {value:5, next:{value: 4, next: {value: 3, next: {value:2, next:{value:1, next: null}}}}}}




