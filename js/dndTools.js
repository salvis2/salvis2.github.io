// dndTools.js

// Roll n d6s, primarily for ability score generation
function rollDice(dieSize,numDice) {
	let total = 0;

	for (let i = 0; i < numDice; i++) {
		total += Math.ceil(Math.random()*dieSize);
	}

	return total;
}

function rollAbScore(num) {
	let abScore = 0;
	let rolls = [];

	for (let i = 0; i < num; i++) {
		rolls.push(rollDice(6,1));
	}

  rolls.sort(function(a,b){return b-a});

	for (let i = 0; i < 3; i++) {
		abScore += rolls[i];
	}
	return abScore;
}

// Page Selecting Elements
const dieNum = document.querySelector('#numDice');
const dieSize = document.querySelector('#dieSize');
const submit = document.querySelector('#submit');
const statButton = document.querySelector('#rollStats');

function displayDiceTotal() {
	document.getElementById('diceOutput').innerHTML = `${rollDice(dieSize.value,dieNum.value)}`;
}

submit.addEventListener('click',displayDiceTotal);

function displayStats() {
	document.getElementById('statOutput').innerHTML = `${rollAbScore(4)}`;
}

statButton.addEventListener('click',displayStats)