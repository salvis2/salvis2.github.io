/*jshint esversion: 6*/
import { BaseClassTest } from "./test.js";
//import { Barbarian } from "./DnDClasses.js";
//import React from "react";
//import ReactDOM from "react-dom";
// Listen for character class, then render new things as options are selected
// Do I even have character class options?
/*
var selectedCharacterClass;
var selectedCharacterLevel;
var selectedCharacterRace;
*/
const dndClasses = ["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Wizard"];

const testThingy = new BaseClassTest();

ReactDOM.render(
	React.createElement(
		"p", null, `${testThingy.attrib}`),
	document.getElementById("test")
);
ReactDOM.render(
	React.createElement(
		"p", null, `hello`),
	document.getElementById("test2")
);

// Character Class Selection
class classButton extends React.Component {
	render() {
		return React.createElement("button",{className: "character-selection", onClick: this.beginCharacterCreation}, `${this.props.characterClassName}`);
	}

	constructor(props) {
		super(props);
		this.beginCharacterCreation = this.beginCharacterCreation.bind(this);
	}
	
	beginCharacterCreation() {
		// Highlight the button?
		// Reset the form?
		ReactDOM.render(
			React.createElement(
				"p", null, `${this.props.characterClassName} Selected. `),
			document.getElementById("output-text"));

		//selectedCharacterClass = this.props.characterClassName;

		// Render Text
		ReactDOM.render(
			React.createElement(
				"p", null, "Select your starting level"),
			document.getElementById("level-selection")
		);

		// Render Level Input Form
		ReactDOM.render(
			React.createElement(
				"input",{id: "level-input-area", type: "number", min: "1", max: "20", step: "1"},null),
			document.getElementById("level-input")
		);

		// Render Level Form Submission Button
		ReactDOM.render(
			React.createElement(levelSelection,null,null),
			document.getElementById("level-submission")
		);
	}
}

const dndListItems = dndClasses.map((dndClass) =>
	React.createElement(classButton, {characterClassName: `${dndClass}`},null)
);

const startButton = document.querySelector("#startButton");

const startContent = React.createElement(
	"p", null, "Select a Character Class"
);

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

// character level
class levelSelection extends React.Component {
	render() {
		return React.createElement("button",{onClick: this.submitLevel}, "Submit Level");
	}

	constructor(props) {
		super(props);
		this.submitLevel = this.submitLevel.bind(this);
	}

	submitLevel() {
		let selectedLevel = document.getElementById("level-input-area").value;
		ReactDOM.render(
			React.createElement("p", null, `Selected Level: ${selectedLevel}`),
			document.getElementById("level-selection")
		);
	}
}

// Roll or input ability scores

// Assign skill points

// Pick bonus feats?

// Explain class features?

// Explain what will need to be picked (feats)

// Name Character