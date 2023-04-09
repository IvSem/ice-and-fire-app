import styled from 'styled-components';
import img from './error.jpeg';

const ErrorMess = styled.div`
	font-size: 30px;
	color: #ff0000;
	display: block;
	text-align: center;
	text-shadow: 2px 2px 15px red;
	img {
		max-width: 100%;
	}
`;

export const ErrorMessage = () => {
	return (
		<ErrorMess>
			Something goes wrong
			<div>
				<img src={img} alt="error" />
			</div>
		</ErrorMess>
	);
};
