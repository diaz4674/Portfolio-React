import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import Github from "../icons/Git.png";
import LinkedIn from "../icons/linkedin.png";
import { withRouter } from "react-router-dom";
import "./Professional/professionalStyles.css";

// Styles
const noUnderline = {
	textDecoration: "none",
	fontFamily: "Bangers",
	fontSize: "20px",
};

class Topbar extends React.Component {
	state = {
		linkedIn: false,
		Github: false,
	};

	componentDidMount() {
		if (localStorage.getItem("theme") === "bat-theme") {
			this.setTheme("bat-theme");
			document.getElementById("slider").checked = false;
		} else {
			this.setTheme("theme-professional");
			document.getElementById("slider").checked = true;
		}
	}
	setTheme(themeName) {
		localStorage.setItem("theme", themeName);
		document.documentElement.className = themeName;
	}
	toggleTheme(e) {
		e.preventDefault();
		if (localStorage.getItem("theme") === "bat-theme") {
			this.setTheme("theme-professional");
			this.props.history.push("/creativeMode");
		} else {
			this.setTheme("bat-theme");
			this.props.history.push("/");
		}
	}

	toggleGit = () => {
		this.setState({ Github: !this.state.Github });
	};

	toggleLinkedIn = () => {
		this.setState({ linkedIn: !this.state.linkedIn });
	};

	render() {
		return (
			<Container>
				<Navbar collapseOnSelect expand="lg" style={{ background: "#f5bd07" }}>
					<Navbar.Brand to="/" style={noUnderline}>
						Miguel Diaz
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						style={{ justifyContent: "space-between" }}
					>
						<Nav className="mr-auto" style={{ alignItems: "center" }}>
							<Nav.Link href="#About_me" style={noUnderline}>
								About Me
							</Nav.Link>

							<Nav.Link href="#Projects" style={noUnderline}>
								Projects
							</Nav.Link>

							<Nav.Link href="#Contact" style={noUnderline}>
								Contact
							</Nav.Link>
						</Nav>
						<EndIcons>
							<Icons
								target="_blank"
								href="https://github.com/diaz4674"
								onMouseEnter={this.toggleGit}
								onMouseLeave={this.toggleGit}
							>
								<img
									src={Github}
									alt="Github"
									style={{
										width: "40px",
										transition: "ease 0.3s",
										transform: this.state.Github ? "scale(1.2, 1.2)" : "",
									}}
								/>
							</Icons>
							<Icons
								target="_blank"
								href="https://www.linkedin.com/in/diaz4674/"
								onMouseEnter={this.toggleLinkedIn}
								onMouseLeave={this.toggleLinkedIn}
							>
								<img
									src={LinkedIn}
									alt="Linkedin"
									style={{
										width: "40px",
										transition: "ease 0.3s",
										transform: this.state.linkedIn ? "scale(1.2, 1.2)" : "",
									}}
								/>
							</Icons>
							<label
								id="switch"
								className="switch"
								style={{ margin: "0", marginLeft: "15px" }}
							>
								{" "}
								<input
									type="checkbox"
									onClick={this.toggleTheme.bind(this)}
									id="slider"
								/>
								<span className="slider round"></span>
							</label>
						</EndIcons>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		);
	}
}

const Container = styled.div`
	width: 100%;
`;

const EndIcons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const Icons = styled.a`
	margin: 0 12px;
`;
export default withRouter(Topbar);
