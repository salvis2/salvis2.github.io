// Component to roll ability scores
import React from "react";
import { AbilityScore } from "./AbilityScore.jsx";
import { AbilityScoreRoller } from "./AbilityScoreRoller.jsx";

export class AbilityScores extends React.Component {
	render() {
		// Make an inline style so that these are inline-block
		// And spaced better
		return (
			<div>
				<h3>Ability Scores</h3>
				<p>Set your ability scores! You input them manually, but can click{" "}
				"Roll Ability Scores" if you don't want to get out your dice (4d6, drop the lowest).</p>
				<p>These are the base scores, they may be modified if your race has bonuses or{" "}
				 penalties. These modifications will only be reflected in the Overview.</p>
				<div>
					<AbilityScore ability="str" changeAbilityScore={ this.props.changeAbilityScore } />
					<AbilityScore ability="dex" changeAbilityScore={ this.props.changeAbilityScore } />
					<AbilityScore ability="con" changeAbilityScore={ this.props.changeAbilityScore } />
					<AbilityScore ability="int" changeAbilityScore={ this.props.changeAbilityScore } />
					<AbilityScore ability="wis" changeAbilityScore={ this.props.changeAbilityScore } />
					<AbilityScore ability="cha" changeAbilityScore={ this.props.changeAbilityScore } />
				</div>
				<div>
					<AbilityScoreRoller />
				</div>
			</div>
		);
	}
}
