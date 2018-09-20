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
		console.log(`Making New ${this.props.characterClass}`);
		switch (this.props.characterClass) {
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

		// Should return entry titles (ex. Base Attack Bonus) and the data (ex. good)
		// with different inline styles / components
		// Base Class Options
		let classData = characterClass.classStatstoArray(this.props.characterLevel);
		let classDataMap = classData.map((data) =>
			<p>{ data }</p>
		);

		// Spellcaster Options

		// Character Options

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
