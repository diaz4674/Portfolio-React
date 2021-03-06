import React, { Component } from "react";
import styled from "styled-components";

// Technology Status Bar Component
class Bar extends Component {
	render() {
		let lightColor;
		let darkColor;

		if (this.props.themeColor === "") {
			// Batman Theme Colors
			lightColor = "#f5bd07";
			darkColor = "#f6ff6e";
		} else {
			// Professional Theme Colors
			lightColor = "#f77063";
			darkColor = "#ff5296";
		}
		return (
			<>
				<Container>
					<OuterBar>
						<Progress lightColor={lightColor} darkColor={darkColor}>
							<Text> {this.props.name} </Text>
						</Progress>
					</OuterBar>
				</Container>
			</>
		);
	}
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	flex-wrap: wrap;
`;

const Text = styled.p`
	width: 100%;
	color: black;
	font-size: 21px;
	display: flex;
	font-weight: 900;
	justify-content: center;
	font-family: "raleway-bold";
	text-transform: uppercase;
	margin: 0;
`;

const OuterBar = styled.div`
	width: 214px;
	height: 27px;
	border: 0.5px black solid;
	/* Creates a hovering/glow effect depending on the shadow color */
	@keyframes glowing {
		0% {
			box-shadow: 0px 4px 30px black;
		}
		100% {
			box-shadow: 0px 4px 10px black;
		}
	}
	animation: glowing 1.5s ease infinite alternate-reverse;
`;

const Progress = styled.div`
	width: 100%;
	height: 27px;
	z-index: 2;
	border: 0.5px black solid;
	background-color: ${(props) => {
		return props.lightColor;
	}};
	display: flex;
	align-items: center;
	margin: auto;

	@keyframes colorChange {
		0% {
			background-color: ${(props) => {
				return props.lightColor;
			}};
		}
		100% {
			background-color: ${(props) => {
				return props.DarkColor;
			}};
		}
	}
	animation: colorChange 3s ease infinite alternate-reverse;
`;

export default Bar;
