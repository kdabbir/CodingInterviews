function Queue(value){
    this.queue = [value];
}

Queue.prototype.enqueue = function(value){
    this.queue.push(value);
    return value;
}
Queue.prototype.dequeue = function(){
    var tempQueue = [];
    if(!tempQueue.length){
        for(let i=0; i< this.queue.length; i++){
            tempQueue.push(this.queue.pop());
        }
}
return tempQueue.pop();    

}

let testArray = [7,3,5,6,8,10];

let queueObj = new Queue(10);

console.log(queueObj.enqueue(20));

console.log(queueObj.dequeue());
console.log(queueObj);
