import { ErrorMessage } from 'components/errorMessage/errorMessage';
import React, { Component } from 'react';
import ApiService from 'services/ApiService';
import './CharDetails.css';

export class CharDetails extends Component {
	gotService = new ApiService();

	state = {
		char: null,
	};

	updateChar = () => {
		const { charId } = this.props;
		if (!charId) {
			return;
		}
		this.gotService.getCharacter(charId).then(char => {
			this.setState({ char });
		});
	};

	componentDidMount() {
		this.updateChar();
	}

	componentDidUpdate(prevProps) {
		if (this.props.charId !== prevProps.charId) {
			this.updateChar();
		}
	}

	render() {
		if (!this.state.char) {
			return (
				<span className="select-error"> {'<='} Please select a Character</span>
			);
		}

		const { name, gender, born, died, culture } = this.state.char;

		return (
			<div className="char-details rounded">
				<h4>{name}</h4>
				<ul className="list-group list-group">
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Gender</span>
						<span>{gender}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Born</span>
						<span>{born}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Died</span>
						<span>{died}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Culture</span>
						<span>{culture}</span>
					</li>
				</ul>
			</div>
		);
	}
}
