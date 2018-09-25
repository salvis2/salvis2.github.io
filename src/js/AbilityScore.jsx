// Child Component of AbilityScores
import React from "react";

export class AbilityScore extends React.Component {
	constructor(props) {
		super(props);
		this.inputId = `${this.props.ability}-input`;
		this.submitAbilityScore = this.submitAbilityScore.bind(this);
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

	submitAbilityScore() {
		let newScore = document.getElementById(this.inputId).value;
		this.setState({
			score: newScore
		});
	}

	render() {
		return (
			<div>
				<p>{this.abilityTitle}: {this.state.score}</p>
				<input id={this.inputId}
					ability={this.props.ability} type="number" min="3" max="18" step="1" />
				<button onClick={this.submitAbilityScore}>Submit Score</button>
			</div>
		);
	}
}
