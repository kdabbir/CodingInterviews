
var LL = {head:{value:2,next:{value:3,next:{value:4,next:null}}}};

function LinkedList(){
  this.head = null;
}
function deleteKthFromEnd(sll, k){
  var node = sll.head,
      i = 1,
      kthNode,
      previous;
  if(k<=0) return sll;

   while(node){
     if(i == k) kthNode = sll.head;
     else if(i-k>0){
      previous = kthNode;
      kthNode = kthNode.next;
     }
     i++;

     node = node.next;
   }
   //kth node is the head
   if(!previous)
      sll.head = sll.head.next;
   else{
    previous.next = kthNode.next;
  }
  return sll;
}
console.log(deleteKthFromEnd(LL,3));