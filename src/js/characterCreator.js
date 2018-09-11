/* jshint esversion: 6 */
import React 				from "react";
import ReactDOM 			from "react-dom";
import { ClassButtonList } 	from "./ClassButtonList.js";
import { CharacterResults } from "./CharacterResults.js";
import "../css/characterCreator.css";
import "../css/main.css";
// Listen for character class, then render new things as options are selected
// Do I even have character class options?

// Is the script working at all?
ReactDOM.render(
	React.createElement(
		"p", null, "characterCreator.js is working"),
	document.getElementById("test2")
);

// Set up classes, can expand later
const displayedDndClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter",
	"Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Wizard"];

let classButtonList =
	React.createElement(ClassButtonList,
		{ characterClasses: displayedDndClasses },
		null);

// Start Character Creation Button
// const startButton = document.querySelector("#startButton");

export class CharacterCreator extends React.Component {
	constructor(props) {
		super(props);

		this.submitCharacterClass = this.submitCharacterClass.bind(this);
		this.submitLevel = this.submitLevel.bind(this);
		this.startCharacterCreation = this.startCharacterCreation.bind(this);

		this.state = {
			selectedCharacterClass: null,
			selectedCharacterLevel: null,
			selectedCharacterRace: null
		};
	}
	// var selectedCharacterClass;
	// var selectedCharacterLevel;
	// let selectedCharacterRace;
	render() {
		let startButton = React.createElement("button",
			{ onClick: this.startCharacterCreation },
			"Begin Character Creation");

		return React.createElement("div",
			null,
			startButton);
		// 7630
	}

	// Start Character Creation Function
	startCharacterCreation() {
		const startContent =
			React.createElement(
				"p", null, "Select a Character Class");

		// Character Selection Submission Button
		const submitClass =
			React.createElement("button",
				{ onClick: this.submitCharacterClass },
				"Submit Class Selection");

		ReactDOM.render(
			startContent,
			document.getElementById("output-text")
		);

		ReactDOM.render(
			classButtonList,
			document.getElementById("output-classes")
		);

		ReactDOM.render(
			submitClass,
			document.getElementById("class-submit-button")
		);
	};

	// Character Selection Submission Function
	submitCharacterClass() {
		// selectedCharacterClass = document.getElementById("output-classes").getSelectedClass;
		this.state.selectedCharacterClass = classButtonList.getSelectedClass;

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
			React.createElement("button", { onClick: this.submitLevel }, "Submit Level Selection"),
			document.getElementById("level-submission")
		);
	}

	// Level Selection Submission
	submitLevel() {
		this.state.selectedCharacterLevel = document.getElementById("level-input-area").value;

		ReactDOM.render(
			React.createElement("p", null,
				`Selected Character: Level ${this.state.selectedCharacterLevel} ${this.state.selectedCharacterClass}`),
			document.getElementById("level-selection")
		);

		ReactDOM.render(
			React.createElement(CharacterResults,
				{ characterClass: this.state.selectedCharacterClass, characterLevel: this.state.selectedCharacterLevel },
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
}

ReactDOM.render(
	React.createElement(
		CharacterCreator, null, null
	),
	document.getElementById("start-character")
);
