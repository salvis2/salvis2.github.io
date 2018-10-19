/* jshint esversion: 6 */
// Class Button List Component

import React from "react";
// import ReactDOM from "react-dom";
import { ClassButton } from "./ClassButton.jsx";

export class ClassButtonList extends React.Component {
	constructor(props) {
		super(props);
		this.changeClass = this.changeClass.bind(this);
	}

	changeClass(newClass) {
		this.setState({
			selectedClass: newClass
		});
		this.props.changeCharacterClasses(newClass);
	}

	render() {
		// Add styles?
		const classButtonList = this.props.characterClasses.map((dndClass) =>
			(
				<li>
					<ClassButton characterClassName={ dndClass } changeClass={ this.changeClass } />
				</li>
			)
		);
		return (
			<div>
				<h3>Class Selection</h3>
				<p>Click a Class to add it to your character! Click it again to remove it.</p>
				<ul>{ classButtonList }</ul>
			</div>
		);
	}
}
