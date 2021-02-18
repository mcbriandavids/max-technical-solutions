import styled from 'styled-components';

const StyledButton = styled.header`
	 {
		background-color: var(--default-background-color);
		color: var(--default-text-color) !important;
		position: relative;
		cursor: pointer;
		outline: none;
		border: none;
		padding: 0.5rem;
		text-align: center;
		text-decoration: none !important;
	}

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: var(--background-color) !important;
		z-index: -1;

		transform: scaleX(0);
		transform-origin: left;
		transition: transform 300ms ease-in-out;
	}
	:hover::before,
	:focus::before {
		transform: scaleX(1);
	}
	 {
		z-index: 1;
	}
	:hover,
	:focus {
		color: var(--text-color) !important;
	}
`;
export default StyledButton;
