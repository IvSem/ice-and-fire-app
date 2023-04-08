import React, { Component } from 'react';

export default class ApiService extends Component {
	baseURL = 'https://anapioficeandfire.com/api';

	getResource = async url => {
		const response = await fetch(`${this.baseURL}` + url);
		if (!response.ok) {
			throw new Error(`Could not fetch ${url} , received ${response.status}`);
		}
		return await response.json();
	};

	getAllCharacters = async () => {
		const result = await this.getResource('/characters?page=5&pageSize=10');
		return result.map(this._transformCharacter);
	};

	getCharacter = async id => {
		const character = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(character);
	};

	getAllHouses = url => {
		return this.getResource(`/houses/${url}`);
	};
	getHouse = id => {
		return this.getResource(`/houses/${id}/`);
	};

	getAllBooks = url => {
		return this.getResource(`/books/${url}/`);
	};
	getBook = id => {
		return this.getResource(`/books/${id}/`);
	};

	_transformCharacter = char => {
		return {
			name: char.name,
			gender: char.gender,
			born: char.born,
			died: char.died,
			culture: char.culture,
		};
	};

	_transformHouse = house => {
		return {
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord,
			ancestralWeapons: house.ancestralWeapons,
		};
	};

	_transformBook = book => {
		return {
			name: book.name,
			numberOfPages: book.numberOfPages,
			publisher: book.publisher,
			released: book.released,
		};
	};

	render() {
		return <div>ApiService</div>;
	}
}
