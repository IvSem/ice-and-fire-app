import React, { Component } from 'react';
import './ItemList.css';
import styled from 'styled-components';
import ApiService from 'services/ApiService';
import { LoaderSpin } from 'components/LoaderSpin/LoaderSpin';
import { ListGroupItem } from 'reactstrap';

const List = styled.ul`
	background-color: rgba(255, 255, 255, 0.372) !important;
`;

//const ListItem = styled.li`
//	font-size: 18px;
//	font-weight: 700;
//	color: #f79b38;
//	background-color: rgba(255, 255, 255, 0) !important;
//`;

export class ItemList extends Component {
	gotService = new ApiService();

	state = {
		charList: null,
	};

	componentDidMount() {
		this.gotService
			.getAllCharacters()
			.then(charList => this.setState({ charList }));
	}

	renderItems = array => {
		return array.map(({ name, id }) => {
			return (
				<ListGroupItem
					active={this.props.charId === id}
					key={id}
					className="list-group-item"
					onClick={() => this.props.handleCharSelected(id)}
				>
					{name}
				</ListGroupItem>
			);
		});
	};

	render() {
		const { charList } = this.state;

		if (!charList) {
			return <LoaderSpin />;
		}

		const items = this.renderItems(charList);

		return <List className="item-list list-group bg-light">{items}</List>;
	}
}
