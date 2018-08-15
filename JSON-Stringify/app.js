function MyJsonStringify(json){
 if (!Array.isArray(json) && json.constructor == Object && typeof(json) === "object"){
    return "{"+
      Object.keys(json).map((key) => {  
      return `"${key}":${MyJsonStringify(json[key])}`;
    })+
          "}";
  } else if(Array.isArray(json)){
    return "["+
      json.map( (val) =>  MyJsonStringify(val) ) 
            +"]";
  } else if(typeof(json) ==="number"){
    return json;
  } else if(typeof(json) === "string"){
    return `"${ json }"`;
  }
}


let testInput = { foo: 'bar',
bar: 'foo',
foobar: { 
    foo: 'bar',
    bar: 'foo'
},
myarr: [1,2,3,4]};


// {"foo":"bar","bar":"foo","foobar":{"foo":"bar","bar":"foo"}} 


console.log(MyJsonStringify(testInput));




