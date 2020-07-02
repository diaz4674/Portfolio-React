import React from "react";
import Git from "../../icons/Git.png";
import Linkedin from "../../icons/linkedin.png";
import BatmanLego from "../../images/BatmanLego.jpg";
import Profile from "../../images/profile.jpg";
import { withRouter } from "react-router-dom";
import { toggleModes } from "../actions";
import { connect } from "react-redux";
import ProjectCarousel from "../Projects/Projects";
import "./professionalStyles.css";
import ScrollableAnchor from "react-scrollable-anchor";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const noUnderline = {
	textDecoration: "none",
	fontSize: "20px",
};

class Professional extends React.Component {
	async componentDidMount() {
		if (localStorage.getItem("theme") === "bat-theme") {
			await this.props.toggleModes(true);
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
	render() {
		return (
			<div>
				<title>Miguel Diaz</title>
				{/* Link to CSS file */}
				<link rel="stylesheet" href="./style.css" />
				{/* Required meta tags */}
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				{/* Font Awesome */}
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
					integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
					crossOrigin="anonymous"
				/>
				{/* Bootstrap CSS */}
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
					crossOrigin="anonymous"
				/>
				{/* NavBar */}
				<Navbar collapseOnSelect expand="lg" style={{ color: "white" }}>
					<Navbar.Brand to="/" style={noUnderline}>
						Miguel Diaz
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse
						id="responsive-navbar-nav"
						style={{ justifyContent: "space-between" }}
					>
						<Nav className="mr-auto" style={{ alignItems: "center" }}>
							<Nav.Link href="#aboutMe" style={noUnderline}>
								About Me
							</Nav.Link>

							<Nav.Link href="#Projects" style={noUnderline}>
								Projects
							</Nav.Link>

							<Nav.Link href="#contactSection" style={noUnderline}>
								Contact
							</Nav.Link>
						</Nav>
						<EndIcons>
							<Icons
								target="_blank"
								href="https://github.com/diaz4674"
								rel="noopener noreferrer"
							>
								<img src={Git} alt="Github" className="navIcons" />
							</Icons>
							<Icons
								target="_blank"
								href="https://www.linkedin.com/in/diaz4674/"
								rel="noopener noreferrer"
							>
								<img src={Linkedin} alt="Linkedin" className="navIcons" />
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

				<div className="bodyContainer">
					<div className="shadedColor">
						<div className="img-top">
							<img src={BatmanLego} alt="" className="header-video" />
						</div>
						<div className="headerText">
							<img src={Profile} alt="" className="profileImg" />
							<h1 className="my-name"> Miguel Diaz</h1>
							<p className="full-stack"> Software Engineer</p>
						</div>
					</div>
				</div>
				<ScrollableAnchor id={"aboutMe"}>
					<div className="aboutContainer">
						<h2> About Me</h2>
						<p>
							I am a Software Engineer that loves to focus on creating
							aesthetically pleasing colors, themes, and animations to generate
							a strong user interface. I also enjoy working with the backend to
							help make a smooth transition and seeing the Restful API’s
							successfully displayed for users. In the next five years, I am
							hoping to gain enough experience to be considered a Senior
							Software Engineer.
						</p>
						<p />
						Hobbies include 3D modeling designs and printing them out with my 3D
						printer, as well as spending time with my wife &amp; two cats. I
						have a passion for learning, and spend time in Udemy to learn other
						skills, such as Adobe products that helped build this site. The demo
						videos below were made with Adobe Premier, while Adobe Illustrator
						was used to create some custom icons.
						<p />
					</div>
				</ScrollableAnchor>
				<div className="skillsContainer" id="skillsSection">
					<h1>Skills</h1>
					<button className="skillsButton"> Show Skills </button>
					<div className="hiddenSkills">
						<div className="skills">
							<img src="images/HTMLLogo.png" alt="HTML" className="htmlLogo" />
							<img src="images/CSS3Logo.png" alt="CSS" className="htmlLogo" />
							<img src="images/React.png" alt="React" className="logos" />
							<img src="images/Redux.png" alt="Redux" className="logos" />
							<img
								src="images/Javascript.png"
								alt="Javascript"
								className="logos"
							/>
							<img src="images/jQuery.png" alt="jQuery" className="logos" />
							<img src="images/githubIcon.png" alt="Github" className="logos" />
							<img src="images/SQL.png" alt="SQL" className="logos" />
						</div>
						<div className="card">
							<div className="card-header AdditionalSkillsHeader">
								<h4> Additional Skills </h4>
							</div>
							<div className="card-body ">
								<blockquote className="blockquote mb-0 additionalSkillsContainer">
									<ul className="skillsList">
										<li>Express</li>
										<li>Restful API's</li>
										<li>UI Frameworks </li>
									</ul>
									<ul className="skillsList">
										<li>CRUD Operations</li>
										<li>Adobe Products</li>
										<li>Agile/Scrum Environments</li>
									</ul>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
				<ScrollableAnchor id={"Projects"}>
					<div className="projectsContainer" id="projectsSection">
						<ProjectCarousel mode="proMode" />
					</div>
				</ScrollableAnchor>
				<footer>
					<div className="card-body">
						<ScrollableAnchor id={"contactSection"}>
							<div className="footerContainer">
								<div className="phoneEmailSection">
									<h4>Contact Information</h4>
									<div className="footerIconContainer">
										<div className="phoneContainer">
											<i className="fas fa-phone" />
											<p className="card-text phone"> Phone: (415) 858-5179 </p>
										</div>
										<div className="emailContainer">
											<i className="far fa-envelope" />
											<a href="mailto:diaz4674@gmail.com">
												<p className="card-text email">
													{" "}
													Email: diaz4674@gmail.com{" "}
												</p>
											</a>
										</div>
									</div>
								</div>
								<div className="socialMediaLinks">
									<div className="socialSection">
										<div>
											<h4>Social</h4>
										</div>
										<div className="socialIconFooter">
											<a
												href="https://github.com/diaz4674"
												target="_blank"
												style={{ textDecoration: "none" }}
												rel="noopener noreferrer"
											>
												<img
													src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"
													alt="Github Icon"
													className="navIcons"
												/>
												<p className="githubText"> Github </p>
											</a>
											<a
												href="https://www.linkedin.com/in/miguel-diaz-a2114512a"
												target="_blank"
												className="navIcons"
												rel="noopener noreferrer"
												style={{ textDecoration: "none" }}
											>
												<img
													src={Linkedin}
													alt="LinkedIn Icon"
													className="navIcons"
												/>
												<p className="githubText"> Linkedin </p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</ScrollableAnchor>
					</div>
				</footer>
			</div>
		);
	}
}

const EndIcons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const Icons = styled.a`
	margin: 0 12px;
`;

const mapStateToProps = (state) => ({ state });

export default withRouter(
	connect(mapStateToProps, { toggleModes })(Professional)
);