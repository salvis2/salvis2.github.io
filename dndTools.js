// dndTools.js

// Roll n d6s, primarily for ability score generation
function rollDice(dieSize,numDice) {
	var total = 0

	for (var i = 0; i < numDice; i++){
		total += Math.random().ceil()*dieSize
	}

	return total
}

function rollAbScore(num) {
	return rollDice(6,num)
}

