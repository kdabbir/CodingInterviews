
var LL = {head:{value:2,next:{value:3,next:{value:4,next:null}}}};

function LinkedList(){
  this.head = null;
}

const findKthNode = (ll, number) => {
  if(!ll || !ll.head) return ll;
  if(number <= 0) return null;
  let curr = ll.head;
  let count = 1;
  let kthNode;
  while(curr){
    if(count === number) kthNode = ll.head;
    if(count - number > 0)  kthNode  = kthNode.next;
    curr = curr.next;
    count++;
  }
  return kthNode;
};

console.log(findKthNode(LL,1));