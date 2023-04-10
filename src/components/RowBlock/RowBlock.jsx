import React from 'react';
import { Col, Row } from 'reactstrap';

export const RowBlock = ({ left, right }) => {
	return (
		<Row className="row-gap-5">
			<Col md="6">{left}</Col>
			<Col md="6">{right}</Col>
		</Row>
	);
};
