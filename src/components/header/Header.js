import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
				<Link to="/">Game of Thrones DB</Link>
			</HeaderTitle>
			<HeaderLinks>
				<li>
					<NavLink
						to="/characters"
						style={({ isActive, isPending }) => {
							return {
								fontSize: '20px',
								fontWeight: isActive ? 'bold' : '',
								color: isActive ? 'pink' : 'white',
							};
						}}
					>
						Characters
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/houses"
						style={({ isActive }) => {
							return {
								fontSize: '20px',
								fontWeight: isActive ? 'bold' : '',
								color: isActive ? 'pink' : 'white',
							};
						}}
					>
						Houses
					</NavLink>
					{/*<NavLink>Houses</NavLink>*/}
				</li>
				<li>
					<NavLink
						to="/books"
						style={({ isActive, isPending }) => {
							return {
								fontSize: '20px',
								fontWeight: isActive ? 'bold' : '',
								color: isActive ? 'pink' : 'white',
							};
						}}
					>
						Books
					</NavLink>
					{/*<NavLink>Books</NavLink>*/}
				</li>
			</HeaderLinks>
		</HeaderBlock>
	);
};
