import React from "react";
import styled from "styled-components";
import { Title, Live, Text } from "./_Style.js";

// Technology description Component
class Desciption extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			font: "",
			background: "",
			stroke: "",
			hoverColor: "",
		};
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.mode === undefined) {
			return null;
		} else {
			let { font, background, stroke, hoverColor } = nextProps.mode;
			this.setState({
				font,
				background,
				stroke,
				hoverColor,
			});
		}
	}
	render() {
		let { font, background, stroke, hoverColor } = this.state;
		let { description, tech, link, gitrepo } = this.props;
		return (
			<Container>
				<Title mode={font} fontSize="37px">
					{" "}
					Summary{" "}
				</Title>
				<Text mode={font} fontSize="20px">
					{description}
				</Text>
				<Title mode={font} fontSize="37px">
					{" "}
					Tech Stack{" "}
				</Title>
				<Text mode={font} fontSize="20px">
					{" "}
					{tech}
				</Text>
				<div style={{ color: 'rgb(102, 60, 0)', backgroundColor: 'rgb(255, 244, 229)', padding: '10px', margin: '10px', borderRadius:'4px' }}>
				<span style={{fontWeight: 'bolder'}}>*</span> Due to Heroku's non-free backend hosting, the backend is down, but code is availaible in Github <span style={{fontWeight: 'bolder'}}>*</span>
          </div>
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
