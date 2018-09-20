/* jshint esversion: 6 */
// CharacterResults Component for the Character Creator Page

import React from "react";
import ReactDOM from "react-dom";
import * as dnd from "./DnDClasses.js";

// Display character stats for selected class and level
export class CharacterResults extends React.Component {
	constructor(props) {
		super(props);
		// this.generateCharacterSheet = this.generateCharacterSheet.bind(this);
		this.toggleHidden = this.toggleHidden.bind(this);

		this.state = {
			isHidden: false
		};
	}

	toggleHidden() {
		this.setState({
			isHidden: !this.state.isHidden
		});
	}
	render() {
		let characterClass;
		let spellcaster = false;
		switch (this.props.characterClass) {
		case "Barbarian":
			characterClass = new dnd.Barbarian();
			break;
		case "Bard":
			characterClass = new dnd.Bard();
			spellcaster = true;
			break;
		case "Cleric":
			characterClass = new dnd.Cleric();
			spellcaster = true;
			break;
		case "Druid":
			characterClass = new dnd.Druid();
			spellcaster = true;
			break;
		case "Fighter":
			characterClass = new dnd.Fighter();
			break;
		case "Monk":
			characterClass = new dnd.Monk();
			break;
		case "Paladin":
			characterClass = new dnd.Paladin();
			spellcaster = true;
			break;
		case "Ranger":
			characterClass = new dnd.Ranger();
			spellcaster = true;
			break;
		case "Rogue":
			characterClass = new dnd.Rogue();
			break;
		case "Sorcerer":
			characterClass = new dnd.Sorcerer();
			spellcaster = true;
			break;
		case "Wizard":
			characterClass = new dnd.Wizard();
			spellcaster = true;
			break;
		default:
			characterClass = null;
		}

		// Should return entry titles (ex. Base Attack Bonus) and the data (ex. good)
		// with different inline styles / components
		// Base Class Options
		let classData = characterClass.classStatstoArray(this.props.characterLevel);

		// Spellcaster Options
		if (spellcaster) {
			let spellcasterData = characterClass.spellcastingInfoToArray(this.props.characterLevel);
			classData = classData.concat(spellcasterData);
		}

		// Character Options

		// make html elements from data array
		let classDataMap = classData.map((data) =>
			<p>{ data }</p>
		);

		// Return Statement
		return (
			<div>
				<button onClick={ this.toggleHidden }>
					Toggle Class Details
				</button>
				{ !this.state.isHidden && <div>{ classDataMap }</div> }
			</div>
		);
	}
}
