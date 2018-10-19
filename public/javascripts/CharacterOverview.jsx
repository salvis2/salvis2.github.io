// CharacterOverview.jsx
import React from "react";
import { ClassResults } from "./ClassResults.jsx";

export class CharacterOverview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// Will need multiclassing upgrades
		// Can check the size of characterClass array, insert another line for each class?
		let classOverview = this.props.characterClasses.map((dndClass, i) =>
			<p>Level {this.props.characterLevels[i]} {dndClass}</p>
		);

		let characterOverview = (
			<div>
				<h3>Current Character Overview</h3>
				<p>{this.props.characterName}, a {this.props.characterRace}</p>
				<div>{ classOverview }</div>
				<p>Str: {this.props.characterStr} Dex: {this.props.characterDex}{" "}
					Con: {this.props.characterCon} Int: {this.props.characterInt}{" "}
					Wis: {this.props.characterWis} Cha: {this.props.characterCha}</p>
			</div>
		);
		return characterOverview;
	}
}
