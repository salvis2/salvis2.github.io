/* jshint esversion: 6 */
// Class Button List Component

import React from "react";
// import ReactDOM from "react-dom";
import { ClassButton } from "./ClassButton.js";

export class ClassButtonList extends React.Component {
	render() {
		// Add styles?
		const classButtonList = this.props.characterClasses.map((dndClass) =>
			React.createElement("li", null,
				React.createElement(ClassButton,
					{ characterClassName: `${dndClass}`, changeClass: this.changeClass },
					null)
			)
		);
		return React.createElement("ul", null, classButtonList);
	}

	constructor(props) {
		// Takes in an array called characterClasses of what to make ClassButtons for
		super(props);
		this.changeClass = this.changeClass.bind(this);
		this.getSelectedClass = this.getSelectedClass.bind(this);
		this.state = {
			selectedClass: "yeet you don't have a class yet"
		};
	}

	changeClass(newClass) {
		this.setState({
			selectedClass: newClass
		});
	}

	getSelectedClass() {
		let returnClass = this.state.selectedClass;
		return returnClass;
	}
}
