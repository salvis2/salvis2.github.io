/* jshint esversion: 6 */
// CharacterResults Component for the Character Creator Page

import React from "react";
import ReactDOM from "react-dom";
import * as dnd from "./DnDClasses.js";

// Display character stats for selected class and level
export class CharacterResults extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			usedCharacterClass: this.props.characterClass,
			usedLevel: this.props.characterLevel
		};
	}

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

		// Base Class Options
		let classData = characterClass.classStatstoArray(this.state.usedLevel);
		let classDataMap = classData.map((data) =>
			React.createElement("p", null, data)
		);

		// Spellcaster Options

		// Class-Specific Options

		// Character Options

		// Return Statement
		return React.createElement("p", null, classDataMap);
	}
}
