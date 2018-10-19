// LevelList.jsx
import React from "react";
import { LevelSelection } from "./LevelSelection.jsx";

export class LevelList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const levelList = this.props.selectedClasses.map((dndClass, i) =>
			(
				<li>
					<LevelSelection selectedClass={ dndClass }
						changeLevelSelection={this.props.changeLevelSelection}
						level={this.props.selectedLevels[i]} />
				</li>
			)
		);
		return (
			<div>
				<h3>Level Selection</h3>
				<p>Each Class you have selected needs its own set of levels.{" "}
				If you removed a class, make sure the levels still match here and in the overview.</p>
				<ul>{ levelList }</ul>
			</div>
		);
	}
}
