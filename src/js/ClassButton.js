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

		// Display Selection
		ReactDOM.render(
			React.createElement(
				"p", null, `${this.props.characterClassName} Selected. `),
			document.getElementById("output-text"));
	}
}

export class ClassButtonList extends React.Component {
	render() {
		const classButtonList = this.props.characterClasses.map((dndClass) =>
			React.createElement("li", null,
				React.createElement(ClassButton, { characterClassName: `${dndClass}` }, null)
			)
		);
		return React.createElement("ul", null, classButtonList);
	}

	constructor(props) {
		// Takes in an array called characterClasses of what to make ClassButtons for
		super(props);
		this.state = {
			selectedClass: null
		};
	}
}
