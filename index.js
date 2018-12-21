const readline = require('readline')

const rl = readline.createInterface({ 
	input: process.stdin, 
	output: process.stdout 
}); 

rl.on('line', (input) => { 
	console.log(`Received: ${input}`); 
	check(input)
	rl.close()
});

function check(num, newFlag) {
	num = +num
	let step = num / 2
	let flag = !!newFlag ? newFlag : false

	for(let i = 0; i < step; i++) {
		if(num == Math.pow(i,2)){
			console.log('x^2 = ', num)
			console.log('x = ', i)
			flag = true
			check(i, true)
		}
	}

	if(flag == false) {
		console.log('sqrt no')
	}
}

