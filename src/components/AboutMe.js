import React, { Component } from "react";
import styled from "styled-components";
import Us from "../images/us4.0.png";

class AboutMe extends Component {
	render() {
		return (
			<Container>
				<AboutText>
					<Title>Welcome!</Title>
					<Text>
						Software Engineer that goes the extra mile to develop elegant,
						reusable, user-friendly solutions and experiences. Enjoys
						encountering complex problems to hone skills to solve bigger and
						better challenges. I enjoy building a healthy working relationship
						with people by communicating, building rapport, and organizing to
						build an effective work flow. In the next five years, I am hoping to
						gain enough experience to be considered a Senior Software Engineer.
					</Text>
					<Text>
						Hobbies include 3D modeling designs and printing them out with my 3D
						printer, as well as spending time with my wife &amp; two cats. I
						have a passion for learning, and spend time in Pluralsight to learn
						additional skills, such as Adobe the suite that helped create the
						below image of my family.
					</Text>
				</AboutText>
				<FamilyImg src={Us} alt="Miguel, Pregnant wife, and pets" />
			</Container>
		);
	}
}

//Styles
const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
	flex-wrap: wrap;
	margin-right: 5%;
	box-shadow: 0px 4px 30px black;
	background-color: #ffdc74;
	padding: 25px;

	@media (max-width: 1230px) {
		margin: 25px 0 80px;
	}
`;

const AboutText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: auto;
`;

const Title = styled.p`
	font-size: 47px;
	font-weight: 900;
	color: black;
	font-family: "Bangers";
	letter-spacing: 2px;
	display: flex;
	justify-content: flex-start;
	text-transform: uppercase;
`;

const Text = styled.p`
	font-size: 20px;
	padding: 5px;
	display: flex;
	// font-weight: 800;
	justify-content: center;
	font-family: "Bangers";
	letter-spacing: 1px;
`;

const FamilyImg = styled.img`
	width: 35em;
	display: flex;
	margin: auto;
	padding: 15px;
	background: #ffffff;
	box-shadow: 0px 3px 15px gray;
	border-radius: 10px;

	@media (max-width: 650px) {
		width: 100%;
	}
`;

export default AboutMe;
