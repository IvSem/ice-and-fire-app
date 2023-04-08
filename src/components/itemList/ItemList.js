import React, { Component } from 'react';
import './ItemList.css';

import styled from 'styled-components';

const List = styled.ul`
	background-color: rgba(255, 255, 255, 0.372) !important;
`;

const ListItem = styled.li`
	font-size: 18px;
	font-weight: 700;
	color: #f79b38;
	background-color: rgba(255, 255, 255, 0) !important;
`;

export class ItemList extends Component {
	render() {
		return (
			<List className="item-list list-group bg-light">
				<ListItem className="list-group-item">John Snow </ListItem>
				<ListItem className="list-group-item">Brandon Stark</ListItem>
				<ListItem className="list-group-item">Geremy</ListItem>
			</List>
		);
	}
}
