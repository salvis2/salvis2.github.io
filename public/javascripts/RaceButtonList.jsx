// RaceButtonList.jsx
import React from "react";
import { RaceButton } from "./RaceButton.jsx";

export class RaceButtonList extends React.Component {
	constructor(props) {
		super(props);
		this.changeRace = this.changeRace.bind(this);
	}

	changeRace(newRace) {
		this.props.changeCharacterRace(newRace);
	}

	render() {
		const raceButtonList = this.props.characterRaces.map((dndRace) =>
			(
				<li>
					<RaceButton characterRaceName={ dndRace } changeRace={ this.changeRace } />
				</li>
			)
		);
		return (
			<div>
				<h3>Race Selection</h3>
				<p>Select a race!</p>
				<ul>{ raceButtonList }</ul>
			</div>
		);
	}
}
