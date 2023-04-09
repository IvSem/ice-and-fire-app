import { ErrorMessage } from 'components/errorMessage/errorMessage';
import { LoaderSpin } from 'components/LoaderSpin/LoaderSpin';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ApiService from 'services/ApiService';
import styled from 'styled-components';

const RandomBlock = styled.div`
	background-color: rgba(255, 255, 255, 0.242);
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
	h4 {
		color: rgb(80, 235, 80);
		margin-bottom: 20px;
		text-align: center;
		span {
			color: #f8f82f;
		}
	}
	span {
		font-size: 20px;
		color: #592633;
	}
`;

export class RandomChar extends Component {
	state = {
		char: {},
		isLoading: true,
		error: false,
	};

	gotService = new ApiService();

	onLoaded = char => {
		this.setState({ char, isLoading: false });
	};

	onError = error => {
		this.setState({ error: true, isLoading: false });
	};

	componentDidMount() {
		this.updateChar();
		console.log('mount');
	}
	componentDidUpdate() {
		console.log('update');
	}
	componentWillUnmount() {
		console.log('unmount');
		//clearInterval(this.timerId);
	}

	updateChar = async () => {
		const id = Math.floor(Math.random() * 500) + 1;
		await this.gotService
			.getCharacter(id)
			.then(this.onLoaded)
			.catch(this.onError);
	};

	render() {
		const {
			char: { name, gender, born, died, culture },
			isLoading,
			error,
		} = this.state;

		return (
			<RandomBlock className="rounded">
				<button onClick={this.updateChar}>alllll</button>
				<h4>
					Random Character: <br />
					{isLoading ? null : <span>{name}</span>}
				</h4>
				{error ? (
					<ErrorMessage />
				) : isLoading ? (
					<Container className="text-center">
						<LoaderSpin />
					</Container>
				) : (
					<ul className="list-group">
						<li className="list-group-item d-flex justify-content-between">
							<span className="term">Gender:</span>
							<span>{gender}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span className="term">Born:</span>
							<span>{born}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span className="term">Died:</span>
							<span>{died}</span>
						</li>
						<li className="list-group-item d-flex justify-content-between">
							<span className="term">Culture:</span>
							<span>{culture}</span>
						</li>
					</ul>
				)}
			</RandomBlock>
		);
	}
}
