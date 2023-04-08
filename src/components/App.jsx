import { Col, Container, Row } from 'reactstrap';
import { CharDetails, Header, RandomChar, ItemList } from 'components';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
	return (
		<Container>
			<Container>
				<Header />
			</Container>
			<Container>
				<Row>
					<Col lg={{ size: 6, offset: 0 }}>
						<RandomChar />
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<ItemList />
					</Col>
					<Col md="6">
						<CharDetails />
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
