import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import { Field, ItemDetails, ItemList, RowBlock } from 'components';
import { ErrorMessage } from 'components/errorMessage/errorMessage';
import ApiService from 'services/ApiService';

export class CharacterPage extends Component {
	gotService = new ApiService();
	state = {
		selectedItem: null,
		error: false,
	};

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
				getData={this.gotService.getAllCharacters}
				renderItem={item => (
					<>
						<span>{item.name}</span>
						<Badge color="danger" pill>
							New
						</Badge>
					</>
				)}
			></ItemList>
		);

		const itemDetails = (
			<ItemDetails
				itemId={this.state.selectedItem}
				getData={this.gotService.getCharacter}
				label="Please select a Character"
			>
				<Field field="gender" label="Gender"></Field>
				<Field field="born" label="Born"></Field>
				<Field field="died" label="Died"></Field>
				<Field field="culture" label="Culture"></Field>
			</ItemDetails>
		);

		return (
			<>
				<RowBlock left={itemList} right={itemDetails} />
			</>
		);
	}
}
