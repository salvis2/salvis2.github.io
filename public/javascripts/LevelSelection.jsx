// LevelSelection.jsx
import React from "react";

// Need a way to make a variable amount of these, and list classes
export class LevelSelection extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { level: this.props.level };
	}

	handleChange(e) {
		// e.preventDefault();
		this.setState({
			level: e.target.value
		});
		this.props.changeLevelSelection(this.props.selectedClass, e.target.value);
	}

	render() {
		let levelSelection = (
			<label>
				{ this.props.selectedClass } Levels:
				<input type="number" min="1" max="20" step="1"
					value={ this.state.level } onChange={ this.handleChange } />
			</label>
		);
		return levelSelection;
	}
}
