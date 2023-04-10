import {
	Field,
	ItemDetails,
	ItemList,
	RowBlock,
	ErrorMessage,
} from 'components';

import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import ApiService from 'services/ApiService';

export class BooksPage extends Component {
	gotService = new ApiService();
	state = { selectedItem: null, error: false };

	componentDidCatch() {
		this.setState({ error: true });
	}

	handleItemSelected = id => {
		this.setState({ selectedItem: id });
	};

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		const itemList = (
			<ItemList
				handleItemSelected={this.handleItemSelected}
				itemId={this.state.selectedItem}
				getData={this.gotService.getAllBooks}
				renderItem={item => (
					<>
						<span>{item.name}</span>
						<Badge color="info" pill>
							New
						</Badge>
					</>
				)}
			></ItemList>
		);

		const itemDetails = (
			<ItemDetails
				itemId={this.state.selectedItem}
				getData={this.gotService.getBook}
				label="Please select a Book"
			>
				<Field field="publisher" label="Publisher"></Field>
				<Field field="released" label="Released"></Field>
				<Field field="numberOfPages" label="Number-Of-Pages"></Field>
				<Field field="authors" label="Authors"></Field>
			</ItemDetails>
		);

		return (
			<>
				<RowBlock left={itemList} right={itemDetails} />
			</>
		);
	}
}
