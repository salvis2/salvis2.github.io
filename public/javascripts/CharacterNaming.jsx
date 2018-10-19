// CharacterNaming.jsx
import React from "react";

export class CharacterNaming extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { name: "Sample Text McGee" };
	}

	handleChange(e) {
		this.setState({
			name: e.target.value
		});
		this.props.changeCharacterName(e.target.value);
	}

	render() {
		let characterNaming = (
			<label>
				Name:
				<input type="text" value={ this.state.name } onChange={ this.handleChange } />
			</label>
		);
		return (
			<div>
				<h3>Character Name</h3>
				{ characterNaming }
			</div>
		);
	}
}
