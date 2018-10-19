// ClassResultsList.jsx
import React from "react";
import { ClassResults } from "./ClassResults.jsx";

export class ClassResultsList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const classResultsList = this.props.characterClasses.map((dndClass, i) =>
			<ClassResults characterClass={ dndClass } characterLevel={ this.props.characterLevels[i] } />
		);

		return (
			<div>
				{ classResultsList }
			</div>
		);
	}
}
