import React from "react";
import Git from "../../icons/Git.png";
import Linkedin from "../../icons/linkedin.png";
import BatmanLego from "../../images/BatmanLego.jpg";
import Profile from "../../images/profile.jpg";
import { withRouter } from "react-router-dom";
import ProjectCarousel from "../Projects/Projects";
import "./professionalStyles.css";
import ScrollableAnchor from "react-scrollable-anchor";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import Lottie from "react-lottie";
import Developer from "../assets/developer.json";
import Tech from "../TechSection/Tech";
import Us from "../../images/us4.0.png";

import ScrollAnimation from "react-animate-on-scroll";

class Professional extends React.Component {
    state = {
        // State toggles the scaling animation of logos, and visibility of skills
        skills: false,
        showSkills: "",
        SkillsHeader: "SkillsHeader",
        linkedIn: false,
        Github: false,
    };

    toggleTheme(e) {
        e.preventDefault();
        console.log("Fun fact, I love superheros! #Nerd");
        this.props.history.push("/creativeMode");
    }

    toggleSkill() {
        this.setState({
            showSkills: "showSkills",
            SkillsHeader: "transitionHeaderSkill",
        });
    }

    toggleGit = () => {
        this.setState({ Github: !this.state.Github });
    };

    toggleLinkedIn = () => {
        this.setState({ linkedIn: !this.state.linkedIn });
    };

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
                <ScrollAnimation
                    animateIn="fadeIn"
                    animateOut="fadeOut"
                    animateOnce={true}
                >
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
                            style={{
                                noUnderline,
                                fontWeight: "500",
                                fontSize: "20px",
                                fontStyle: "oblique",
                            }}
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
                                <Nav.Link
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1d-W3Gfh3jp8tk1Mdmj9BKaDhpMz4JPbG/view?usp=sharing"
                                    style={noUnderline}
                                >
                                    Resume
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
                                <button
                                    className="btn btn-5 btn-5a icon-cog"
                                    onClick={this.toggleTheme.bind(this)}
                                >
                                    <span className="btnText">Creative Mode</span>
                                </button>
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
                                            <Tech professionalView="professionalView" />
                                        </div>
                                    </div>
                                </div>
                            </ScrollableAnchor>
                            <div className="aboutContainer">
                                <h2> About Me</h2>
                                <p>
                                    Software Engineer that goes the extra mile to develop elegant,
                                    reusable, user-friendly solutions and experiences. Enjoys
                                    encountering complex problems to hone skills to solve bigger
                                    and better challenges. I enjoy building a healthy working
                                    relationship with people by communicating, building rapport,
                                    and organizing to build an effective work flow. In the next
                                    five years, I am hoping to gain enough experience to be
                                    considered a Senior Software Engineer.
								</p>
                                <p />
								Hobbies include 3D modeling designs and printing them out with
								my 3D printer, as well as spending time with my wife &amp; two
								cats. I have a passion for learning, and spend time in
								Pluralsight to learn additional skills, such as Adobe the suite
								that helped create the below image of my family.
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
                                                <p className="card-text phone">
                                                    {" "}
													Phone: (415) 858-5179{" "}
                                                </p>
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
                                                    style={{
                                                        textDecoration: "none",
                                                        margin: "5px 10px 0 0",
                                                    }}
                                                    rel="noopener noreferrer"
                                                    onMouseEnter={this.toggleGit}
                                                    onMouseLeave={this.toggleGit}
                                                >
                                                    <img
                                                        src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"
                                                        alt="Github Icon"
                                                        style={{
                                                            height: "2em",
                                                            transition: "ease 0.3s",
                                                            marginBottom: "10px",
                                                            transform: this.state.Github
                                                                ? "scale(1.5, 1.5)"
                                                                : "",
                                                        }}
                                                    />
                                                    <p
                                                        style={{
                                                            fontSize: "20px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            color: "black",
                                                            transition: "ease 0.3s",
                                                            transform: this.state.Github
                                                                ? "scale(1.1, 1.1)"
                                                                : "",
                                                            // textShadow: this.state.Github ? "1.5px 1.5px gray" : ""
                                                        }}
                                                    >
                                                        {" "}
														Github{" "}
                                                    </p>
                                                </a>
                                                <a
                                                    href="https://www.linkedin.com/in/miguel-diaz-a2114512a"
                                                    target="_blank"
                                                    className="navIcons"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        textDecoration: "none",
                                                        margin: "5px 0 0 10px",
                                                    }}
                                                    onMouseEnter={this.toggleLinkedIn}
                                                    onMouseLeave={this.toggleLinkedIn}
                                                >
                                                    <img
                                                        src={Linkedin}
                                                        alt="LinkedIn Icon"
                                                        style={{
                                                            height: "2em",
                                                            transition: "ease 0.3s",
                                                            marginBottom: "10px",
                                                            transform: this.state.linkedIn
                                                                ? "scale(1.5, 1.5)"
                                                                : "",
                                                        }}
                                                    />
                                                    <p
                                                        style={{
                                                            fontSize: "20px",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            color: "black",
                                                            transition: "ease 0.3s",
                                                            transform: this.state.linkedIn
                                                                ? "scale(1.1, 1.1)"
                                                                : "",
                                                            // textShadow: this.state.linkedIn ? "1.5px 1.5px gray" : ""
                                                        }}
                                                    >
                                                        {" "}
														Linkedin{" "}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollableAnchor>
                        </div>
                    </footer>
                </ScrollAnimation>
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

const noUnderline = {
    textDecoration: "none",
    fontSize: "20px",
};

export default withRouter(Professional);
