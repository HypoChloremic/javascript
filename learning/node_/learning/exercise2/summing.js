// This is trying to create a simple summing function
// in node.js

function summing(einList) {
	// body...
	let sum = 0
	for (let i of einList) {
		sum += i
	}
	return sum
}

let einList = [1,2,3,4]
console.log(summing(einList))