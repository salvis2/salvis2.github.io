// Ability Score Roller
import React from "react";

export class AbilityScoreRoller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scores: ""
		};
		this.rollAbilityScores = this.rollAbilityScores.bind(this);
		this.rollAbilityScore = this.rollAbilityScore.bind(this);
	}

	rollAbilityScore() {
		let score = 0;
		let diceRolls = [];

		for (let i = 0; i < 4; i += 1) {
			diceRolls.push(Math.ceil(Math.random() * 6));
		}

		diceRolls.sort(function (a, b) {
			return b - a;
		});

		for (let i = 0; i < 3; i += 1) {
			score += diceRolls[i];
		}

		return score;
	}

	rollAbilityScores() {
		let rolledScores = "";
		for (let i = 0; i < 6; i += 1) {
			rolledScores += `${this.rollAbilityScore()}, `;
		}
		rolledScores = rolledScores.slice(0, -2);
		this.setState({
			scores: rolledScores
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.rollAbilityScores}>Roll Ability Scores</button>
				<p>{this.state.scores}</p>
			</div>
		);
	}
}
