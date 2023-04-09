import { Header, RandomChar } from 'components';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';

export class Layout extends Component {
	state = {
		showRandomChar: false,

		error: false,
	};
	handleShowRandom = () => {
		this.setState(prev => ({ showRandomChar: !prev.showRandomChar }));
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
				</Container>
				<Outlet />
			</Container>
		);
	}
}
