import styled from 'styled-components';
import img from './error.jpeg';

const ErrorMess = styled.div`
	font-size: 30px;
	color: #ff0000;
	display: block;
	text-align: center;

	div {
		font-size: 36px;
		font-weight: bold;
		color: #ee3215;
		text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de,
			0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
		-webkit-text-stroke: 1px #2fcecb74;
	}

	img {
		max-width: 100%;
	}
`;

export const ErrorMessage = () => {
	return (
		<ErrorMess>
			<div>Something goes wrong</div>
			<div>
				<img src={img} alt="error" />
			</div>
		</ErrorMess>
	);
};
