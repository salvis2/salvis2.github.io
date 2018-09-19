/* jshint esversion: 6 */
// Class Button List Component

import React from "react";
// import ReactDOM from "react-dom";
import { ClassButton } from "./ClassButton.js";

export class ClassButtonList extends React.Component {
	render() {
		// Add styles?
		const classButtonList = this.props.characterClasses.map((dndClass) =>
			(
				<li>
					<ClassButton characterClassName={ dndClass } changeClass={ this.changeClass } />
				</li>
			)
		);
		return <ul>{ classButtonList }</ul>;
	}

	constructor(props) {
		super(props);
		this.changeClass = this.changeClass.bind(this);
		this.getSelectedClass = this.getSelectedClass.bind(this);
		this.state = {
			selectedClass: ""
		};
	}

	changeClass(newClass) {
		this.setState({
			selectedClass: newClass
		});
		this.props.changeSelectedCharacterClass(newClass);
	}

	getSelectedClass() {
		let returnClass = this.state.selectedClass;
		return returnClass;
	}
}
