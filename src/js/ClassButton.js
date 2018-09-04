/* jshint esversion: 6 */
// ClassButton Component for the Character Creator Page

import React from "react";
import ReactDOM from "react-dom";

// Character Class Selection
export class ClassButton extends React.Component {
	render() {
		return React.createElement(
			"button",
			{ className: "character-selection", onClick: this.beginCharacterCreation },
			`${this.props.characterClassName}`
		);
	}

	constructor(props) {
		super(props);
		this.beginCharacterCreation = this.beginCharacterCreation.bind(this);
	}

	beginCharacterCreation() {
		// Highlight the button?
		// this.addClass("active");
		// Remove other selection

		// Add name to parent state
		const newClass = this.props.characterClassName;
		this.props.changeClass(newClass);

		// Display Selection
		ReactDOM.render(
			React.createElement(
				"p", null, `${newClass} Selected.`),
			document.getElementById("output-text"));
	}
}
