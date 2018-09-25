// Component to roll ability scores
import React from "react";
import { AbilityScore } from "./AbilityScore.jsx";
import { AbilityScoreRoller } from "./AbilityScoreRoller.jsx";

export class AbilityScores extends React.Component {
	render() {
		// Make an inline style so that these are inline-block>
		return (
			<div>
				<div>
					<AbilityScore ability="str" />
					<AbilityScore ability="dex" />
					<AbilityScore ability="con" />
					<AbilityScore ability="int" />
					<AbilityScore ability="wis" />
					<AbilityScore ability="cha" />
				</div>
				<div>
					<AbilityScoreRoller />
				</div>
			</div>
		);
	}
}
