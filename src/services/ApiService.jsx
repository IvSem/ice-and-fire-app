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

	getAllHouses = async () => {
		const houses = await this.getResource(`/houses/`);
		return houses.map(this._transformHouse);
	};
	getHouse = async id => {
		const house = await this.getResource(`/houses/${id}/`);
		return this._transformHouse(house);
	};

	getAllBooks = async () => {
		const books = await this.getResource(`/books?page=1&pageSize=20`);
		return books.map(this._transformBook);
	};

	getBook = async id => {
		const book = await this.getResource(`/books/${id}/`);
		return this._transformBook(book);
	};

	extractNumbers = char => {
		const digits = char.match(/\d+$/);
		return digits ? digits[0] : '';
	};

	_transformCharacter = ({ name, gender, born, died, culture, url }) => {
		const err = 'no data :(';
		return {
			id: this.extractNumbers(url) || err,
			name: name || err,
			gender: gender || err,
			born: born || err,
			died: died || err,
			culture: culture || err,
		};
	};

	_transformHouse = ({
		name,
		region,
		words,
		titles,
		overlord,
		founded,
		url,
		coatOfArms,
	}) => {
		const err = 'no data :(';
		return {
			id: this.extractNumbers(url) || err,
			name: name || err,
			region: region || err,
			words: words || err,
			titles: titles.map(el => {
				if (el === '') {
					return err;
				}
				return el;
			}),
			overlord: overlord || err,
			coatOfArms: coatOfArms || err,
			founded: founded || err,
		};
	};

	_transformBook = ({
		name,
		numberOfPages,
		publisher,
		released,
		url,
		authors,
	}) => {
		const err = 'no data Book :(';
		return {
			id: this.extractNumbers(url) || err,
			name: name || err,
			numberOfPages: numberOfPages || err,
			publisher: publisher || err,
			released: released || err,
			authors: authors || err,
		};
	};

	render() {
		return <div>ApiService</div>;
	}
}
