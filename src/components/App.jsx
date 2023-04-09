import { Button, Col, Container, Row } from 'reactstrap';
import { CharDetails, Header, RandomChar, ItemList } from 'components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

export class App extends Component {
	state = {
		showRandomChar: false,
		selectedChar: null,
	};

	handleShowRandom = () => {
		this.setState(prev => ({ showRandomChar: !prev.showRandomChar }));
	};

	handleCharSelected = id => {
		this.setState({ selectedChar: id });
	};

	render() {
		return (
			<Container>
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col lg={{ size: 8, offset: 0 }}>
							{this.state.showRandomChar && <RandomChar />}
						</Col>
					</Row>

					<Button
						color="primary"
						size="lg"
						className="mb-5"
						onClick={this.handleShowRandom}
					>
						Click Random
					</Button>
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
				</Container>
			</Container>
		);
	}
}
