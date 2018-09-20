/* jshint esversion: 6 */
import React 								from "react";
import ReactDOM 						from "react-dom";
import { ClassButtonList } 	from "./ClassButtonList.js";
import { ClassResults } from "./ClassResults.js";

// I need these so that my formatting in the local host is familiar
import "../css/characterCreator.css";
import "../css/main.css";

// Listen for character class, then render new things as options are selected
// Do I even have character class options?

// Set up classes, can expand later
const displayedDndClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter",
	"Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Wizard"];

export class CharacterCreator extends React.Component {
	constructor(props) {
		super(props);

		this.submitCharacterClass = this.submitCharacterClass.bind(this);
		this.submitLevel = this.submitLevel.bind(this);
		this.startCharacterCreation = this.startCharacterCreation.bind(this);
		this.changeSelectedCharacterClass = this.changeSelectedCharacterClass.bind(this);
		this.displaySelectionResults = this.displaySelectionResults.bind(this);

		this.state = {
			selectedCharacterClass: null,
			selectedCharacterLevel: null,
			selectedCharacterRace: null
		};
	}

	render() {
		let startButton = (
			<button onClick={ this.startCharacterCreation }>
				Begin Character Creation
			</button>
		);

		return <div>{startButton}</div>;
		// 7630
	}

	// Change state.selectedCharacterClass
	changeSelectedCharacterClass(newClass) {
		this.setState({
			selectedCharacterClass: newClass
		});
	}

	// Start Character Creation Function
	startCharacterCreation() {
		const startContent = <p>Select a Character Class</p>;

		// Character Selection Submission Button
		const submitClass =
			<button	onClick={ this.submitCharacterClass } >Submit Class Selection</button>;

		// Class Button List
		let classButtonList = (
			<ClassButtonList
				characterClasses= { displayedDndClasses }
				changeSelectedCharacterClass= { this.changeSelectedCharacterClass }/>
		);

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
	}

	// Character Selection Submission Function
	submitCharacterClass() {
		// Render Text
		ReactDOM.render(
			<p>Select your starting level</p>,
			document.getElementById("level-selection")
		);

		// Render Level Input Form
		ReactDOM.render(
			<input id="level-input-area" type="number" min="1" max="20" step="1" />,
			document.getElementById("level-input")
		);

		// Render Level Form Submission Button
		ReactDOM.render(
			<button onClick={ this.submitLevel }>Submit Level Selection</button>,
			document.getElementById("level-submission")
		);
	}

	// Level Selection Submission
	submitLevel() {
		// Error for level not in 0-20?
		this.state.selectedCharacterLevel = document.getElementById("level-input-area").value;

		ReactDOM.render(
			(
				<p>Selected Character:
				Level {this.state.selectedCharacterLevel} {this.state.selectedCharacterClass}</p>
			),
			document.getElementById("level-selection")
		);

		ReactDOM.render(
			<button onClick={ this.displaySelectionResults }>Display Results</button>,
			document.getElementById("display-results")
		);
	}

	// Display Selection Results
	displaySelectionResults() {
		let classResults = (
			<ClassResults
				characterClass={ this.state.selectedCharacterClass }
				characterLevel={ this.state.selectedCharacterLevel } />
		);

		ReactDOM.render(
			classResults,
			document.getElementById("character-output")
		);

		ReactDOM.render(
			<button onClick={ this.selectCharacterOptions }>Set Character Options</button>,
			document.getElementById("character-option-button"));
	}

	selectCharacterOptions() {

	}
	// Roll or input ability scores
  // Make a component for this, can use race input?

	// Assign skill points

	// Pick bonus feats?

	// Explain class features?

	// Explain what will need to be picked (feats)

	// Name Character
}

// Start Character Creation Button
ReactDOM.render(
	<CharacterCreator />,
	document.getElementById("start-character")
);
