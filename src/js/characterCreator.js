/* jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import * as dnd from "./DnDClasses.js";
import { ClassButtonList } from "./ClassButton.js";
import CharacterResults from "./CharacterResults.js";
import "../css/characterCreator.css";
import "../css/main.css";
// Listen for character class, then render new things as options are selected
// Do I even have character class options?

var selectedCharacterClass;
var selectedCharacterLevel;
// let selectedCharacterRace;

/*
const testThingy = new dnd.Bard();

ReactDOM.render(
	React.createElement(
		"p", null, `${testThingy.classFeaturesMap}`),
	document.getElementById("test")
);
*/
// Is the script working at all?
ReactDOM.render(
	React.createElement(
		"p", null, "characterCreator.js is working"),
	document.getElementById("test2")
);

// Set up classes, can expand later
const displayedDndClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter",
	"Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Wizard"];

// Start Character Creation Button
const startButton = document.querySelector("#startButton");

const startContent =
	React.createElement(
		"p", null, "Select a Character Class");

// Start Character Creation Function
startButton.addEventListener("click", () => {
	ReactDOM.render(
		startContent,
		document.getElementById("output-text")
	);

	ReactDOM.render(
		React.createElement(ClassButtonList, { characterClasses: displayedDndClasses }, null),
		document.getElementById("output-classes")
	);

	ReactDOM.render(
		submitClass, document.getElementById("class-submit-button")
	);
});

// Character Selection Submission Button
const submitClass =
	React.createElement("button", { onClick: submitCharacterClass() }, "Submit Class Selection");

// Character Selection Submission Function
function submitCharacterClass() {
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
		React.createElement("button", { onClick: submitLevel() }, "Submit Level Selection"),
		document.getElementById("level-submission")
	);
}

// Level Selection Submission
function submitLevel() {
	selectedCharacterLevel = document.getElementById("level-input-area").value;

	ReactDOM.render(
		React.createElement("p", null, `Selected Level: ${selectedCharacterLevel}`),
		document.getElementById("level-selection")
	);

	ReactDOM.render(
		React.createElement(CharacterResults,
			{ characterClass: selectedCharacterClass, characterLevel: selectedCharacterLevel },
			null),
		document.getElementById("character-output")
	);
}

// Display Selection Results



// Roll or input ability scores

// Assign skill points

// Pick bonus feats?

// Explain class features?

// Explain what will need to be picked (feats)

// Name Character
