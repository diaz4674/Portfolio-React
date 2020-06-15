import React from "react";
import styled from "styled-components";
import Hamburger from "../icons/Hamburger.png";

class BottomNav extends React.Component {
	componentDidMount() {
		window.onscroll = this.scrollFunction();
	}

	scrollFunction() {
		let scrollButton = document.getElementById("scrollButton");

		window.addEventListener("scroll", () => {
			if (window.scrollY > 20) {
				scrollButton.style.opacity = "1";
				scrollButton.style.cursor = "pointer";
			} else {
				scrollButton.style.opacity = "0";
				scrollButton.style.cursor = "default";
			}
		});
	}
	render() {
		return (
			<NavBottom id="scrollButton">
				<div className="thisNav">
					<Text href="#Top"> Home </Text>
					<Text href="#About_me"> About </Text>
					<Text href="#Projects"> Projects</Text>
					<Text href="#Contact"> Contact </Text>
					<img
						src={Hamburger}
						alt="hamburger navigation"
						className="hamburger"
					/>
				</div>
			</NavBottom>
		);
	}
}

const Text = styled.a`
	display: flex;
	justify-content: center;
	font-family: Bangers;
	align-items: center;
	font-size: 23px;
	margin: 0 20px;
	color: black;
	&:hover {
		text-decoration: none;
	}
`;

const NavBottom = styled.div`
	opacity: 0;
	position: fixed;
	z-index: 2;
	transition: 0.3s ease;
	cursor: default;
`;

export default BottomNav;
