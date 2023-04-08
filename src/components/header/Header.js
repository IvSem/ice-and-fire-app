import React from 'react';
import { NavLink } from 'reactstrap';
import styled from 'styled-components';

const HeaderBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
`;

const HeaderTitle = styled.h3`
	font-size: 24px;
	color: #fff;
	margin: 0;
`;

const HeaderLinks = styled.ul`
	display: flex;
	margin: 0;
	align-items: center;
	color: #fff;
	list-style-type: none;
	li {
		margin-right: 20px;
		font-size: 18px;
	}
`;

export const Header = () => {
	return (
		<HeaderBlock>
			<HeaderTitle>
				<NavLink>Game of Thrones DB</NavLink>
			</HeaderTitle>
			<HeaderLinks>
				<li>
					<NavLink>Characters</NavLink>
				</li>
				<li>
					<NavLink>Houses</NavLink>
				</li>
				<li>
					<NavLink>Books</NavLink>
				</li>
			</HeaderLinks>
		</HeaderBlock>
	);
};
