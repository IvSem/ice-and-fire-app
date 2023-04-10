import { LoaderSpin } from 'components/LoaderSpin/LoaderSpin';
import React, { Children, Component } from 'react';
import ApiService from 'services/ApiService';
import './ItemDetails.css';

export class ItemDetails extends Component {
	gotService = new ApiService();

	state = {
		item: null,
		isLoading: false,
	};

	updateItem = async () => {
		const { getData } = this.props;
		this.setState({ isLoading: true });
		const { itemId } = this.props;
		if (!itemId) {
			return;
		}
		await getData(itemId)
			.then(item => {
				this.setState({ item });
			})
			.finally(item => {
				this.setState({ isLoading: false });
			});
	};

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}

	componentDidCatch() {}

	render() {
		if (!this.state.item) {
			return (
				<span className="select-error">
					{'<='} {this.props.label}
				</span>
			);
		}
		const { item } = this.state;
		const { name } = item;

		return (
			<>
				{this.state.isLoading ? (
					<LoaderSpin />
				) : (
					<div className="char-details rounded">
						<h4>{name}</h4>
						<ul className="list-group list-group">
							{Children.map(this.props.children, child => {
								return React.cloneElement(child, { item });
							})}
						</ul>
					</div>
				)}
			</>
		);
	}
}
