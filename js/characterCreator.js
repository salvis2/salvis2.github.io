//import { Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Wizard, Character} from "./dndClasses.js";
//import React from 'react';
//import ReactDOM from 'react-dom';

// Listen for character class, then render new things as options are selected
// Do I even have character class options?

const dndClasses = ['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Wizard'];
const dndListItems = dndClasses.map((dndClass) =>
	React.createElement('button',null,`${dndClass}`)
	);

const startButton = document.querySelector('#startButton');

const startContent = React.createElement(
	'p', null, `Select a Character Class`
	);

startButton.addEventListener('click', () => {
	ReactDOM.render(
		startContent,
		document.getElementById('output-text')
		);

	ReactDOM.render(
		dndListItems,
		document.getElementById('output-classes')
		);
});



/*
onClick={startCharacterCreation()}
class CharacterSelection extends React.Component {
	render() {
		return (
			<h3>Select a Character Class</h3>
			<ul>{dndListItems}</ul>
			);
	}
}
*/
/*
const element = <h1>yeet</h1>;

function startCharacterCreation() {
	ReactDOM.render(
		element,
		document.getElementById('character-selection')
		);
})*/

// Character class, level, race
// Roll or input ability scores
// Assign skill points
// Pick bonus feats?
// Explain class features?
// Explain what will need to be picked (feats)