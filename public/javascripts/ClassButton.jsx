/* jshint esversion: 6 */
// ClassButton Component for the Character Creator Page

import React from "react";
// import ReactDOM from "react-dom";

// Character Class Selection
export class ClassButton extends React.Component {
	constructor(props) {
		super(props);
		this.changeCharacterClass = this.changeCharacterClass.bind(this);
	}

	changeCharacterClass() {
		// Highlight the button?
		// this.addClass("active");
		// Remove other selection

		// Add name to parent state
		const newClass = this.props.characterClassName;
		this.props.changeClass(newClass);
	}

	render() {
		return (
			<button className="character-selection" onClick={ this.changeCharacterClass }>
				{this.props.characterClassName}
			</button>
		);
	}
}
