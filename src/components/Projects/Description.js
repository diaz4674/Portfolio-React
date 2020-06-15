import React from "react";
import styled from "styled-components";
import { Title, Live, Text } from "./_Style.js";

// Technology description Component
class Desciption extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			proMode: true,
		};
	}
	componentDidMount() {
		this.props.mode === true
			? this.setState({
					proMode: false,
					font: "raleway-bold",
					background: "#ffb6af",
					stroke: "",
					hoverColor: "#f77063",
			  })
			: this.setState({
					proMode: false,
					font: "Bangers",
					background: "#fffb9b",
					stroke: "1px black",
					hoverColor: "#f5bd07",
			  });
	}
	render() {
		let { description, tech, link, gitrepo } = this.props;
		let { font, background, stroke, hoverColor } = this.state;
		console.log(this.state);
		return (
			<Container>
				<Title fontSize="37px"> Summary </Title>
				<Text fontSize="20px">{description}</Text>
				<Title fontSize="37px"> Tech Stack </Title>
				<Text fontSize="20px"> {tech}</Text>
				<ButtonContainer>
					<Live
						href={link}
						target="_blank"
						font={font}
						background={background}
						stroke={stroke}
						hoverColor={hoverColor}
					>
						Live Site
					</Live>
					<Live
						href={gitrepo}
						target="_blank"
						font={font}
						background={background}
						stroke={stroke}
						hoverColor={hoverColor}
					>
						Github Repo
					</Live>
				</ButtonContainer>
			</Container>
		);
	}
}

// Styles
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px;
`;

// const Title = styled.p`
// 	color: black;
// 	font-family: Bangers;
// 	font-size: 37px;
// 	margin: 0;
// `;

// const Text = styled.p`
// 	margin: 0;
// 	font-size: 20px;
// 	display: flex;
// 	font-weight: 100;
// 	justify-content: center;
// 	align-items: center;
// 	font-family: "raleway-bold";
// 	color: black;
// `;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	@media (max-width: 960px) {
		flex-direction: column;
		align-items: center;
	}
`;

export default Desciption;
