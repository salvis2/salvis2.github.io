// RaceResults.jsx
import React from "react";
import { Human, Dwarf, Elf, Gnome, Half_Elf, Half_Orc, Halfling } from "./DnDRaces.js";

export class RaceResults extends React.Component {
	constructor(props) {
		super(props);
		this.toggleHidden = this.toggleHidden.bind(this);
		this.state = { isHidden: true };
	}

	toggleHidden() {
		this.setState({
			isHidden: !this.state.isHidden
		});
	}

	render() {
		let characterRace;
		switch (this.props.characterRace) {
		case "Human":
			characterRace = new Human();
			break;
		case "Dwarf":
			characterRace = new Dwarf();
			break;
		case "Elf":
			characterRace = new Elf();
			break;
		case "Gnome":
			characterRace = new Gnome();
			break;
		case "Half-Elf":
			characterRace = new Half_Elf();
			break;
		case "Half-Orc":
			characterRace = new Half_Orc();
			break;
		case "Halfling":
			characterRace = new Halfling();
			break;
		default:
			characterRace = null;
			console.log("Invalid Race");
		}

		// Get info to show
		let raceData;

		if (characterRace) {
			raceData = characterRace.racialTraitsToArray();
		} else {
			raceData = [];
		}

		let raceDataMap = raceData.map((data) =>
			<p>{ data }</p>
		);

		return (
			<div>
				<button onClick={ this.toggleHidden }>
					Toggle { this.props.characterRace } Details
				</button>
				{ !this.state.isHidden && <div>{ raceDataMap }</div> }
			</div>
		);
	}
}
