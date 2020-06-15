import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const AligningTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;
export const Title = styled.p`
	color: black;
	font-family: ${(props) => props.mode};
	font-size: ${(props) => {
		return props.fontSize ? props.fontSize : "68px";
	}};
	display: flex;
	justify-content: flex-end;
`;

export const HoverHelper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding-right: 22px;
`;

export const DownArrow = styled.img`
	height: 2.4em;
	margin-right: 13px;
`;
export const Text = styled.p`
	color: black;
	font-family: ${(props) => props.mode};
	font-size: ${(props) => {
		return props.fontSize ? props.fontSize : "25px";
	}};
	margin-bottom: 20px;
`;

export const Live = styled.a`
	margin: 20px 10px 0;
	transition: all 0.8s;
	background-color: ${(props) => props.background};
	border: 0.4px solid black;
	color: black;
	font-family: ${(props) => props.font};
	font-size: 25px;
	padding: 5px 20px;
	display: flex;
	justify-content: center;

	@media (max-width: 960px) {
		width: 146px;
		flex-direction: column;
		align-items: center;
	}
	&:hover {
		color: white;
		box-shadow: 0px 4px 23px black;
		-webkit-text-stroke: ${(props) => props.stroke};
		background-color: ${(props) => props.hoverColor};
		text-decoration: none;
		font-size: 28px;

		@media (max-width: 960px) {
			width: 108%;
			flex-direction: column;
			align-items: center;
		}
	}
`;
