// Pub-sub.

function Model(...args) {
  var firstArg = args[0];
  if(firstArg && firstArg.constructor === Object && typeof(firstArg==="object")){
    for(let key in firstArg){
      this[key] = firstArg[key];
    }
  }
}

Model.prototype.set = function(key, value){
  if(this.onChangeFunc){
    this.onChangeFunc.forEach( (cb)=> cb(key,this[key],value) );
  }
  this[key] = value;
  return value;
};

Model.prototype.get = function(key){
  return this[key]? this[key] : null;
};

Model.prototype.has = function(key) {
  return this[key]? true : false;
};
Model.prototype.unset = function(key) {
   this[key] = null;
};
Model.prototype.on = function(event, cbFn) {
  if(event === "change") {
    if(!this.onChangeFunc){
      this.onChangeFunc = [];
    }
     this.onChangeFunc.push(cbFn)
  }
};
// Execution
const person = new Model();
person.set('name', 'Bob');
console.log(person.get('name')); // Bob

// Unset
console.log(person.has('name')) ;// true
person.unset('name');
console.log(person.has('name'));// false

// Call Method
const person2 = new Model({ name: 'Bob', age: 27 });
console.log(person2.get('name'))
console.log(person2.get('age'))

// Event Listener on Change
person2.on('change', function (attrName, oldValue, newValue) {
    console.log(`1. ${attrName} has changed from ${oldValue} to ${newValue}`)
})

// Second time again
person2.on('change', function (attrName, oldValue, newValue) {
    console.log(`2. ${attrName} has changed from ${oldValue} to ${newValue}`)
})

person2.set('age', 28) // 2 print statements of age has changed from 27 to 28


