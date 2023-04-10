import React, { Component } from 'react';
import './ItemList.css';
import styled from 'styled-components';
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
	state = {
		itemList: null,
	};

	componentDidMount() {
		const { getData } = this.props;
		getData().then(itemList => this.setState({ itemList }));
	}

	renderItems = array => {
		return array.map(item => {
			const { id } = item;
			const label = this.props.renderItem(item);

			return (
				<ListGroupItem
					active={this.props.itemId === id}
					key={id}
					className="list-group-item"
					onClick={() => this.props.handleItemSelected(id)}
				>
					{label}
				</ListGroupItem>
			);
		});
	};

	render() {
		const { itemList } = this.state;

		if (!itemList) {
			return <LoaderSpin />;
		}

		const items = this.renderItems(itemList);

		return <List className="item-list list-group bg-light">{items}</List>;
	}
}
