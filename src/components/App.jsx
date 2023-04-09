import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { ErrorMessage } from './errorMessage/errorMessage';
import { Routes, Route } from 'react-router-dom';
import { Layout, ErrorPage, CharacterPage } from 'pages';

export class App extends Component {
	state = {
		error: false,
	};
	componentDidCatch() {
		this.setState({ error: true });
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		return (
			<>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/characters" element={<CharacterPage />} />
						<Route path="*" element={<ErrorPage />} />
					</Route>
				</Routes>
			</>
		);
	}
}
