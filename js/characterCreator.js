/* jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import * as dnd from "./DnDClasses.js";
// Listen for character class, then render new things as options are selected
// Do I even have character class options?

var selectedCharacterClass;
var selectedCharacterLevel;
// let selectedCharacterRace;

const startButton = document.querySelector("#startButton");
/*
const testThingy = new dnd.Bard();

ReactDOM.render(
	React.createElement(
		"p", null, `${testThingy.classFeaturesMap}`),
	document.getElementById("test")
);
*/
ReactDOM.render(
	React.createElement(
		"p", null, "characterCreator.js is working"),
	document.getElementById("test2")
);

// Display character stats for selected class and level
class characterResults extends React.Component {
	render() {
		// Using this.state.usedCharacterClass
		let characterClass;
		switch (this.state.usedCharacterClass) {
		case "Barbarian":
			characterClass = new dnd.Barbarian();
			break;
		case "Bard":
			characterClass = new dnd.Bard();
			break;
		case "Cleric":
			characterClass = new dnd.Cleric();
			break;
		case "Druid":
			characterClass = new dnd.Druid();
			break;
		case "Fighter":
			characterClass = new dnd.Fighter();
			break;
		case "Monk":
			characterClass = new dnd.Monk();
			break;
		case "Paladin":
			characterClass = new dnd.Paladin();
			break;
		case "Ranger":
			characterClass = new dnd.Ranger();
			break;
		case "Rogue":
			characterClass = new dnd.Rogue();
			break;
		case "Sorcerer":
			characterClass = new dnd.Sorcerer();
			break;
		case "Wizard":
			characterClass = new dnd.Wizard();
			break;
		default:
			characterClass = null;
		}

		let classData = characterClass.classStatstoArray(this.state.usedLevel);
		let classDataMap = classData.map((data) =>
			React.createElement("p", null, data)
		);
		// Base Class Options

		// Spellcaster Options

		// Class-Specific Options

		// Character Options

		// Return Statement
		return React.createElement("p", null, classDataMap);
		// return React.createElement("div", null, { classDataMap });
	}

	constructor(props) {
		super(props);

		this.state = {
			usedCharacterClass: this.props.characterClass,
			usedLevel: this.props.characterLevel
		};
	}
}

// character level
class levelSelection extends React.Component {
	render() {
		return React.createElement("button", { onClick: this.submitLevel }, "Submit Level");
	}

	constructor(props) {
		super(props);
		this.submitLevel = this.submitLevel.bind(this);
	}

	submitLevel() {
		selectedCharacterLevel = document.getElementById("level-input-area").value;

		ReactDOM.render(
			React.createElement("p", null, `Selected Level: ${selectedCharacterLevel}`),
			document.getElementById("level-selection")
		);

		ReactDOM.render(
			React.createElement(characterResults,
				{ characterClass: selectedCharacterClass, characterLevel: selectedCharacterLevel },
				null),
			document.getElementById("character-output")
		);
	}
}

// Character Class Selection
class classButton extends React.Component {
	render() {
		return React.createElement(
			"button",
			{ className: "character-selection", onClick: this.beginCharacterCreation },
			`${this.props.characterClassName}`
		);
	}

	constructor(props) {
		super(props);
		this.beginCharacterCreation = this.beginCharacterCreation.bind(this);
	}

	beginCharacterCreation() {
		// Highlight the button?
		// Reset the form?
		selectedCharacterClass = this.props.characterClassName;

		ReactDOM.render(
			React.createElement(
				"p", null, `${selectedCharacterClass} Selected. `),
			document.getElementById("output-text"));

		// Render Text
		ReactDOM.render(
			React.createElement(
				"p", null, "Select your starting level"),
			document.getElementById("level-selection")
		);

		// Render Level Input Form
		ReactDOM.render(
			React.createElement(
				"input", { id: "level-input-area", type: "number", min: "1", max: "20", step: "1" }, null),
			document.getElementById("level-input")
		);

		// Render Level Form Submission Button
		ReactDOM.render(
			React.createElement(levelSelection, null, null),
			document.getElementById("level-submission")
		);
	}
}

const displayedDndClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Wizard"];

const dndListItems = displayedDndClasses.map((dndClass) =>
	React.createElement(classButton, { characterClassName: `${dndClass}` }, null)
);

const startContent =
	React.createElement(
		"p", null, "Select a Character Class");

startButton.addEventListener("click", () => {
	ReactDOM.render(
		startContent,
		document.getElementById("output-text")
	);

	ReactDOM.render(
		dndListItems,
		document.getElementById("output-classes")
	);
});


// Roll or input ability scores

// Assign skill points

// Pick bonus feats?

// Explain class features?

// Explain what will need to be picked (feats)

// Name Character
