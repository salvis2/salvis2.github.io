'use strict';

// dndTools.js

// Roll n d6s, primarily for ability score generation
function rollDice(dieSize, numDice) {
	var total = 0;

	for (var i = 0; i < numDice; i++) {
		total += Math.ceil(Math.random() * dieSize);
	}

	return total;
}

function rollAbScore(num) {
	var abScore = 0;
	var rolls = [];

	for (var i = 0; i < num; i++) {
		rolls.push(rollDice(6, 1));
	}

	rolls.sort(function (a, b) {
		return b - a;
	});

	for (var _i = 0; _i < 3; _i++) {
		abScore += rolls[_i];
	}
	return abScore;
}

// Page Selecting Elements
var dieNum = document.querySelector('#numDice');
var dieSize = document.querySelector('#dieSize');
var submit = document.querySelector('#submit');
var statButton = document.querySelector('#rollStats');

function displayDiceTotal(count) {
	document.getElementById('diceOutput').innerHTML = '';
	for (var i = 0; i < count - 1; i++) {
		document.getElementById('diceOutput').innerHTML += rollDice(dieSize.value, dieNum.value) + ', ';
	}
	document.getElementById('diceOutput').innerHTML += '' + rollDice(dieSize.value, dieNum.value);
}

submit.addEventListener('click', function () {
	var count = document.getElementById('numIt').value;
	displayDiceTotal(count);
});

// Ability Score Roller
function displayStats(num, count) {
	document.getElementById('statOutput').innerHTML = '';
	for (var i = 0; i < count - 1; i++) {
		document.getElementById('statOutput').innerHTML += rollAbScore(num) + ', ';
	}
	document.getElementById('statOutput').innerHTML += '' + rollAbScore(num);
}

statButton.addEventListener('click', function () {
	var num = document.getElementById('charType').value;
	var numStats = document.getElementById('numStats').value;
	displayStats(num, numStats);
});