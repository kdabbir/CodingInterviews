

var LL = {head:{value:2,next:{value:3,next:{value:4,next:null}}}};

function LinkedList(){
  this.head = null;
}

//Logic is: Kth Node from end = (N-K+1)th from start,where N - Last Node, K - Kth node from end
//Iterate LL till you reach kth index and mark it as head of ll, so we can start this index from start of LL.
//Mark previous and kth Node, iterating through the LL & when it reaches end, thats when you've landed at Kth Node.
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
console.log(deleteKthFromEnd(LL,1));