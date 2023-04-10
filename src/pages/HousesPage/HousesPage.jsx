import { Field, ItemDetails, ItemList, RowBlock } from 'components';
import React, { Component } from 'react';
import ApiService from 'services/ApiService';

export class HousesPage extends Component {
	state = { selectedHouse: null, error: false };

	componentDidCatch() {
		this.setState({ error: true });
	}

	handleItemSelected = id => {
		this.setState({ selectedHouse: id });
	};

	gotService = new ApiService();
	render() {
		const itemList = (
			<ItemList
				itemId={this.state.selectedHouse}
				handleItemSelected={this.handleItemSelected}
				getData={this.gotService.getAllHouses}
				renderItem={item => `${item.name}`}
			/>
		);

		const itemDetails = (
			<ItemDetails
				itemId={this.state.selectedHouse}
				getData={this.gotService.getHouse}
				label="Please select a House"
			>
				<Field field="region" label="Region"></Field>
				<Field field="words" label="Words"></Field>
				<Field field="titles" label="Titles"></Field>
				<Field field="coatOfArms" label="Coat-Of-Arms"></Field>
				<Field field="founded" label="Founded"></Field>
			</ItemDetails>
		);
		return <RowBlock left={itemList} right={itemDetails} />;
	}
}
