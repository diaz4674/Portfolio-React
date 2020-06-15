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
	font-size: 68px;
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
	font-size: 25px;
	margin-bottom: 20px;
`;
