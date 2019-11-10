

function initiateMovement(command) {
	let blocks = new Array(10).fill(0);
	let commands = command.split('');
	let cursor = 0;
	let isItemPicked = false;
	for(let i=0; i < commands.length; i++){
		switch(commands[i]){
			case 'P': cursor = 0;
					isItemPicked = true;
					break;
			case 'M': 
					cursor++;
					if(cursor > 9) cursor = 9;
					break;
			case 'L':
				if(isItemPicked){
					if(blocks[cursor] < 15)
						blocks[cursor]++;
					isItemPicked = false;
					break;	
				}
		}
	}
	let hexaString = blocks.map((count) => count.toString(16).toUpperCase()).reduce((acc, val) =>  acc+val );
	return hexaString;
}

console.log(initiateMovement('PMLPMMMLPMLPMML'));
console.log(initiateMovement('PLPLPLPLPLPLPLPLPLPL'));

