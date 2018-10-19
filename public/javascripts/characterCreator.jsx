import React 									from "react";
import ReactDOM 							from "react-dom";
import { Character }					from "./DnDCharacter.js";
import { CharacterOverview }	from "./CharacterOverview.jsx";
import { ClassButtonList } 		from "./ClassButtonList.jsx";
import { ClassResultsList } 	from "./ClassResultsList.jsx";
import { RaceButtonList }			from "./RaceButtonList.jsx";
import { RaceResults }				from "./RaceResults.jsx";
import { LevelList }					from "./LevelList.jsx";
import { AbilityScores }			from "./AbilityScores.jsx";
import { CharacterNaming }		from "./CharacterNaming.jsx";
import { CharacterGenerator }	from "./CharacterGenerator.jsx";
// var $ = require("jquery");

// I need these so that my formatting in the local host is familiar
import "../stylesheets/characterCreator.css";
import "../stylesheets/main.css";

// Listen for character class, then render new things as options are selected
// Do I even have character class options?

// Set up classes, can expand later
const displayedDndClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter",
	"Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Wizard"];

const displayedDndRaces = ["Human", "Dwarf", "Elf", "Gnome", "Half-Elf", "Half-Orc", "Halfling"];

export class CharacterCreator extends React.Component {
	constructor(props) {
		super(props);

		this.submitCharacterClass = this.submitCharacterClass.bind(this);
		this.submitLevel = this.submitLevel.bind(this);
		this.startCharacterCreation = this.startCharacterCreation.bind(this);
		this.changeCharacterClasses = this.changeCharacterClasses.bind(this);
		this.displaySelectionResults = this.displaySelectionResults.bind(this);
		this.generateCharacterSheet = this.generateCharacterSheet.bind(this);
		this.showCharacterPostBody = this.showCharacterPostBody.bind(this);
		this.changeCharacterRace = this.changeCharacterRace.bind(this);
		this.changeLevelSelection = this.changeLevelSelection.bind(this);
		this.changeCharacterName = this.changeCharacterName.bind(this);
		this.changeAbilityScore = this.changeAbilityScore.bind(this);

		this.state = {
			characterClasses: [],
			characterLevels: [],
			characterRace: "Hobgoblin",
			characterName: "Sample Text McGee",
			characterStr: 10,
			characterDex: 10,
			characterCon: 10,
			characterInt: 10,
			characterWis: 10,
			characterCha: 10
		};
	}

	render() {
		let startButton = (
			<button onClick={ this.startCharacterCreation }>
				Begin Character Creation
			</button>
		);

		let content = (
			<div>
				<p>Welcome to the Character Creator!</p>
				<p>This character creator currently only supports the
				Dungeons and Dragons v3.5 Player's Handbook classes.
				Races are not yet supported. Multiclassing is not yet supported.</p>
				<CharacterOverview
					characterClasses={ this.state.characterClasses }
					characterLevels={ this.state.characterLevels }
					characterRace={ this.state.characterRace }
					characterName={ this.state.characterName }
					characterStr={ this.state.characterStr }
					characterDex={ this.state.characterDex }
					characterCon={ this.state.characterCon }
					characterInt={ this.state.characterInt }
					characterWis={ this.state.characterWis }
					characterCha={ this.state.characterCha } />
				<ClassButtonList
					characterClasses={ displayedDndClasses }
					changeCharacterClasses= { this.changeCharacterClasses }/>
				<ClassResultsList
					characterClasses={ this.state.characterClasses }
					characterLevels={ this.state.characterLevels } />
				<RaceButtonList
					characterRaces={ displayedDndRaces }
					changeCharacterRace={ this.changeCharacterRace } />
				<RaceResults
					characterRace={ this.state.characterRace } />
				<LevelList
					changeLevelSelection={ this.changeLevelSelection }
					selectedClasses={ this.state.characterClasses }
					selectedLevels={ this.state.characterLevels } />
				<AbilityScores
					changeAbilityScore={ this.changeAbilityScore } />
				<CharacterNaming
					changeCharacterName={ this.changeCharacterName } />
				<CharacterGenerator />
			</div>
		);

		return content;
		// 7630
	}

	changeCharacterClasses(newClass) {
		let currentClasses = this.state.characterClasses;
		let currentLevels = this.state.characterLevels;
		console.log(currentClasses);
		const indexOfClass = currentClasses.indexOf(newClass);

		if (indexOfClass > -1) {
			// Remove Class
			currentClasses.splice(indexOfClass, 1);
			currentLevels.splice(indexOfClass, 1);
		} else {
			// Add class
			currentClasses.push(newClass);
			currentLevels.push(0);
		}

		console.log(currentClasses);

		this.setState({
			characterClasses: currentClasses
		});

		this.setState({
			characterLevels: currentLevels
		});
	}

	changeCharacterRace(newRace) {
		this.setState({
			characterRace: newRace
		});
	}

	changeLevelSelection(currentClass, newLevel) {
		let currentClasses = this.state.characterClasses;
		let currentLevels = this.state.characterLevels;
		const indexOfClass = currentClasses.indexOf(currentClass);

		if (indexOfClass > -1) {
			currentLevels[indexOfClass] = newLevel;
		}

		this.setState({
			characterLevels: currentLevels
		});
	}

	changeCharacterName(newName) {
		this.setState({
			characterName: newName
		});
	}

	changeAbilityScore(ability, newScore) {
		switch (ability) {
		case "str":
			this.setState({ characterStr: newScore });
			break;
		case "dex":
			this.setState({ characterDex: newScore });
			break;
		case "con":
			this.setState({ characterCon: newScore });
			break;
		case "int":
			this.setState({ characterInt: newScore });
			break;
		case "wis":
			this.setState({ characterWis: newScore });
			break;
		case "cha":
			this.setState({ characterCha: newScore });
			break;
		default:
			console.log("Invalid Ability Score");
			break;
		}
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
				characterClasses={ displayedDndClasses }
				changecharacterClasses={ this.changeCharacterClasses }/>
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
		this.state.characterLevels = document.getElementById("level-input-area").value;

		ReactDOM.render(
			(
				<p>Selected Character:
				Level {this.state.characterLevels} {this.state.characterClasses}</p>
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
				characterClass={ this.state.characterClasses }
				characterLevel={ this.state.characterLevels } />
		);

		ReactDOM.render(
			classResults,
			document.getElementById("character-output")
		);

		ReactDOM.render(
			<button onClick={ this.selectCharacterOptions }>Set Character Options</button>,
			document.getElementById("character-option-button"));
		/*
		ReactDOM.render(
			<button onClick={ this.generateCharacterSheet }>Generate Character Sheet</button>,
			document.getElementById("generate-character-sheet"));
		*/
		ReactDOM.render(
			<button onClick={ this.showCharacterPostBody }>Show Character Data</button>,
			document.getElementById("generate-character-sheet"));
	}

	// Roll or input ability scores
	selectCharacterOptions() {
		ReactDOM.render(
			<AbilityScores />,
			document.getElementById("ability-scores")
		);
	}
	// Make a component for this, can use race input?

	// Assign skill points

	// Pick bonus feats?

	// Explain class features?

	// Explain what will need to be picked (feats)

	// Name Character

	showCharacterPostBody() {
		let newCharacter = new Character("", this.state.characterClasses,
			this.state.characterRace, this.state.characterLevels,
			"", "", "", "", "", "");

		// Need to convert from array to object for use in body?
		const characterData = newCharacter.createBodyData();
		console.log(JSON.stringify(characterData));
	}

	// Generate Character Sheet
	generateCharacterSheet() {
		// constructor(characterName, characterClass, characterRace,
		// level, race, str, dex, con, inte, wis, cha) {
		let newCharacter = new Character("", this.state.characterClasses,
			this.state.characterRace, this.state.characterLevels,
			"", "", "", "", "", "");

		const characterData = newCharacter.createBodyData();
		fetch("/characterSheet", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(characterData)
		}).then(response => {
			if (response.ok) {
				return response;
			}
			throw new Error("Request failed!");
		}, networkError => {
			console.log(networkError.message);
		}).then(() => {
			window.open("/characterSheet");
		});
		/*
		.then(fetch('/characterSheet').then(response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Request failed!');
			}, networkError => {
				console.log(networkError.message);
			}).then(response => {
				window.location.replace('sebastianalvis.com/characterSheet/');
		}));*/
	}
}

// Start Character Creation Button
ReactDOM.render(
	<CharacterCreator />,
	document.getElementById("start-character")
);
