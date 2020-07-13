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
import Lottie from "react-lottie";
import Developer from "../assets/developer.json";

import CSS3 from "../../icons/CSS3.png";
import HTMLLogo from "../../icons/HTMLLogo.png";
import JavascriptLogo from "../../icons/JS.png";
import ReactLogo from "../../icons/React.png";
import dj from "../../icons/dj.png";
import NodeIcon from "../../icons/node.png";
import Python from "../../icons/python.png";
import adobeCreative from "../../icons/adobeCreative.png";
import Us from "../../images/us4.0.png";

class Professional extends React.Component {
	state = {
		skills: false,
		showSkills: "",
		SkillsHeader: "SkillsHeader",
	};
	async componentDidMount() {
		console.log(this.state);
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
	toggleSkill() {
		this.setState({
			showSkills: "showSkills",
			SkillsHeader: "transitionHeaderSkill",
		});
	}

	render() {
		// Lottie animation settings
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: Developer,
		};

		let { showSkills, SkillsHeader } = this.state;

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
				<Navbar
					collapseOnSelect
					expand="lg"
					style={{
						background: "#FFB6AF",
						boxShadow: "0px 3px 15px gray",
					}}
				>
					<Navbar.Brand
						style={{ noUnderline, fontWeight: "500", fontSize: "19px" }}
					>
						MIGUEL DIAZ
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
					<div className="RowCenterSection">
						<ScrollableAnchor id={"skillsSection"}>
							<div className="skillsContainer">
								<h1>Skills</h1>
								<div className={`${SkillsHeader}`}>
									<Lottie options={defaultOptions} height={450} width={450} />
									<button
										className="skillsButton"
										onClick={this.toggleSkill.bind(this)}
									>
										{" "}
										Show Skills{" "}
									</button>
								</div>
								<div className={`hiddenSkills ${showSkills}`}>
									<div className="skills">
										<ColumnCenter>
											<img src={HTMLLogo} alt="HTML" className="logos" />
											<h4>HTML5</h4>
										</ColumnCenter>
										<ColumnCenter>
											<img src={CSS3} alt="CSS" className="logos" />
											<h4>CSS3</h4>
										</ColumnCenter>
										<ColumnCenter>
											<img src={ReactLogo} alt="React" className="logos" />
											<h4>React</h4>
										</ColumnCenter>
										<ColumnCenter>
											<img
												src={JavascriptLogo}
												alt="Javascript"
												className="logos"
											/>
											<h4>Javascript</h4>
										</ColumnCenter>
										<ColumnCenter>
											<img src={dj} alt="Django" className="logos" />
											<h4>Django</h4>
										</ColumnCenter>
										<ColumnCenter>
											<img src={Python} alt="Python" className="logos" />
											<h4>Python</h4>
										</ColumnCenter>
										<ColumnCenter>
											<img src={NodeIcon} alt="Node" className="logos" />
											<h4>Node</h4>
										</ColumnCenter>
										<ColumnCenter>
											<img
												src={adobeCreative}
												alt="Adobe Creative Suite"
												className="logos"
											/>
											<h4>Adobe Suite</h4>
										</ColumnCenter>
									</div>
									{/* <div className="card">
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
									</div> */}
								</div>
							</div>
						</ScrollableAnchor>
						<div className="aboutContainer">
							<h2> About Me</h2>
							<p>
								I am a Software Engineer that loves to focus on creating
								aesthetically pleasing colors, themes, and animations to
								generate a strong user interface. I also enjoy working with the
								backend to help make a smooth transition and seeing the Restful
								API’s successfully displayed for users. In the next five years,
								I am hoping to gain enough experience to be considered a Senior
								Software Engineer.
							</p>
							<p />
							Hobbies include 3D modeling designs and printing them out with my
							3D printer, as well as spending time with my wife &amp; two cats.
							I have a passion for learning, and spend time in Udemy to learn
							other skills, such as Adobe products that helped build this site.
							The demo videos below were made with Adobe Premier, while Adobe
							Illustrator was used to create some custom icons.
							<p />
							<FamilyImg src={Us} alt="Miguel, Pregnant wife, and pets" />
						</div>
					</div>
				</ScrollableAnchor>

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
												className="navIcons"
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

const FamilyImg = styled.img`
	width: 35em;
	display: flex;
	margin: auto;
	padding: 15px;
	background: #ffffff;

	@media (max-width: 650px) {
		width: 100%;
	}
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

const ColumnCenter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const noUnderline = {
	textDecoration: "none",
	fontSize: "20px",
};

const mapStateToProps = (state) => ({ state });

export default withRouter(
	connect(mapStateToProps, { toggleModes })(Professional)
);
