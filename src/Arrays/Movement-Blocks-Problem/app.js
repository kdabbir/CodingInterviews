// output the number of blocks at each position in hexadecimal

// The machine understands the commands 'P','M', and 'L':

// P; pickup from the pallet and and move to position 0

// M; Move to the next position

// L; Lower the block

// Sample Input 1

// String = "PMLPMMMLPMLPMML"

// Sample Output 1

// "0211000000"

// Sample Input 2

// "PLPLPLPLPLPLPLPLPLPL"

// Sample Output 2

// "A000000000"

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

