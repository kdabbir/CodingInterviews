function test(){
	console.log("Hello world")
}

function test2(){
	var arr = [1,2,3];
	arr.forEach(function(val){
		console.log(val);
	});
}

test2();
test();

function test3(){
	let arr = [1,2,3];
	arr.forEach((val) => {
		console.log(val +" from ES6");
	});
}



test3();