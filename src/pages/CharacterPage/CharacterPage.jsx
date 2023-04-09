import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { CharDetails, ItemList } from 'components';
import { ErrorMessage } from 'components/errorMessage/errorMessage';

export class CharacterPage extends Component {
	state = { selectedChar: null, error: false };

	componentDidCatch() {
		this.setState({ error: true });
	}

	handleCharSelected = id => {
		this.setState({ selectedChar: id });
	};

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}
		return (
			<Row>
				<Col md="6">
					<ItemList
						handleCharSelected={this.handleCharSelected}
						charId={this.state.selectedChar}
					/>
				</Col>
				<Col md="6">
					<CharDetails charId={this.state.selectedChar} />
				</Col>
			</Row>
		);
	}
}
