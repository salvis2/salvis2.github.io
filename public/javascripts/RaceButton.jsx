// RaceButton.jsx
import React from "react";

export class RaceButton extends React.Component {
	constructor(props) {
		super(props);
		this.changeRace = this.changeRace.bind(this);
	}

	changeRace() {
		const newRace = this.props.characterRaceName;
		this.props.changeRace(newRace);
	}

	render() {
		return (
			<button onClick={ this.changeRace }>
				{ this.props.characterRaceName }
			</button>
		);
	}
}
