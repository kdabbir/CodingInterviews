const memoize = () => {
  const hashMap = {};
  return (...args) => {
    console.log(hashMap);
    if(hashMap[args]) return hashmap[args];
    return hashMap[args] = memoizeCallback(args)
  };
};


const memoizeCallback = (str) => `hello ${str}`;


let memoizeStarter = memoize();

console.log(memoizeStarter("Kousthubha"));
console.log(memoizeStarter("Rupesh"));
console.log(memoizeStarter("test"));
