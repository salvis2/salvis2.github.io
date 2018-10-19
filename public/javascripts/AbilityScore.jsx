// Child Component of AbilityScores
import React from "react";

export class AbilityScore extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			score: 0
		};

		switch (this.props.ability) {
		case "str":
			this.abilityTitle = "Strength";
			break;
		case "dex":
			this.abilityTitle = "Dexterity";
			break;
		case "con":
			this.abilityTitle = "Constitution";
			break;
		case "int":
			this.abilityTitle = "Intelligence";
			break;
		case "wis":
			this.abilityTitle = "Wisdom";
			break;
		case "cha":
			this.abilityTitle = "Charisma";
			break;
		default:
			this.abilityTitle = null;
			break;
		}
	}

	handleChange(e) {
		let newScore = e.target.value;
		this.setState({
			score: newScore
		});
		this.props.changeAbilityScore(this.props.ability, newScore);
	}

	render() {
		return (
			<label>
				Base {this.abilityTitle}:{" "}
				<input ability={this.props.ability} type="number" min="3" max="20" step="1"
					value={this.state.score} onChange={ this.handleChange } />
			</label>
		);
	}
}
