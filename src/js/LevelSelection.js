/* jshint esversion: 6 */
// levelSelection Component for the Character Creator Page

import React from "react";
import ReactDOM from "react-dom";
import CharacterResults from "./CharacterResults.js";

// character level
export class LevelSelection extends React.Component {
	render() {
		return React.createElement("button", { onClick: this.submitLevel }, "Submit Level");
	}

	constructor(props) {
		super(props);
		this.submitLevel = this.submitLevel.bind(this);
	}

	submitLevel() {
		let level = document.getElementById("level-input-area").value;

		ReactDOM.render(
			React.createElement("p", null, `Selected Level: ${level}`),
			document.getElementById("level-selection")
		);

		ReactDOM.render(
			React.createElement(CharacterResults,
				{ characterClass: selectedCharacterClass, characterLevel: level },
				null),
			document.getElementById("character-output")
		);
	}
}