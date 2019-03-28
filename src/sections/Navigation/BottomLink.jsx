import styled, {keyframes} from 'styled-components';

import {
	Image,
} from 'semantic-ui-react';

const pulsingDown = keyframes`
	0, 100% {
		transform: translateY(0);
		opacity: 1;
	}

	90% {
		transform: translateY(9px);
		opacity: 0;
	}
`;

export const BottomLink = styled.div`
	position: absolute;
	bottom: 3.6vh;
	cursor: pointer;
	transition: 0.36s;
	&:hover {
		transform: translateY(-9px) scale(1.8);
		img {
			animation: none;
		}
	}
`

export const PulsingIcon = styled(Image)`
	animation: ${pulsingDown} 1.8s ease-in-out infinite;
`
