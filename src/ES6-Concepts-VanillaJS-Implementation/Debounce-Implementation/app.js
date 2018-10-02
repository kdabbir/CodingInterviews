// This is super useful when invoking from an object:
// See this: https://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e

function debounce(func, wait) {
    let timeout
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(undefined, args)
        }, wait);
    }
}



function demo(name){
    console.log( `Hello ${name}`);
}

var demo2 = debounce(demo, 5000);

console.log(demo2('search_1'))
console.log(demo2('search_2'))
console.log(demo2('search_3'))