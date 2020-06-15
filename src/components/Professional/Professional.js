import React from "react";
// import Description from "./Description";
import Git from "../../icons/Git.png";
import Linkedin from "../../icons/linkedin.png";
import BatmanLego from "../../images/BatmanLego.jpg";
import Profile from "../../images/profile.jpg";
import BookmarkDemo from "../DemoVideos/bookmarkDemo.mp4";
import SAM from "../DemoVideos/SAM.mp4";
// import Alabastra from "../DemoVideos/Alabastra.mp4";
import Lyftquest from "../DemoVideos/Liftquest.mp4";
import "./style.css";

class Professional extends React.Component {
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
				<nav className="navbar navbar-expand-lg navbar-light">
					<a className="navbar-brand" href="#" style={{ color: "white" }}>
						Miguel Diaz
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link" href="#aboutMe">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#skillsSection">
									Skills
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#projectsSection">
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contactSection">
									Contact
								</a>
							</li>
							<li className="nav-item dropdown">
								<div
									className="dropdown-menu"
									aria-labelledby="navbarDropdown"
								></div>
							</li>
						</ul>
						<div className="iconsContainer">
							<a
								href="https://github.com/diaz4674"
								target="_blank"
								style={{ textDecoration: "none" }}
							>
								{" "}
								<img src={Git} alt="Github Icon" className="githubIcon" />{" "}
							</a>
							<a href="https://www.linkedin.com/in/diaz4674/" target="_blank">
								<img
									src={Linkedin}
									alt="LinkedIn Icon"
									className="linkedinIcon"
								/>{" "}
							</a>
						</div>
					</div>
				</nav>
				<div className="bodyContainer">
					<div className="shadedColor">
						<div className="img-top">
							<img src={BatmanLego} alt="" className="header-video" />
						</div>
						<div className="headerText">
							<img src={Profile} alt="" className="profileImg" />
							<h1 className="my-name"> Miguel Diaz</h1>
							<p className="full-stack"> Full Stack Developer</p>
						</div>
					</div>
				</div>
				<div className="aboutContainer" id="aboutMe">
					<h2> About Me</h2>
					<p>
						I am a Full Stack Developer that loves to focus on creating
						aesthetically pleasing colors, themes, and animations to generate a
						strong user interface. I also enjoy working with the backend to help
						make a smooth transition and seeing the Restful API’s successfully
						displayed for users. In the next five years, I am hoping to gain
						enough experience to be considered a Senior Software Engineer.
					</p>
					<p />
					Hobbies include 3D modeling designs and printing them out with my 3D
					printer, as well as spending time with my wife &amp; two cats. I have
					a passion for learning, and spend time in Udemy to learn other skills,
					such as Adobe products that helped build this site. The demo videos
					below were made with Adobe Premier, while Adobe Illustrator was used
					to create some custom icons.
					<p />
				</div>
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
				<div className="projectsContainer" id="projectsSection">
					<h1 className="projects-title">Projects</h1>
					<medium className="projects-text-muted">
						Hover over images to start demo video.
					</medium>
					<div className="projectCards">
						{/* Carousel slider */}
						<div id="demo" className="carousel slide" data-ride="carousel">
							{/* The slideshow */}
							<div className="carousel-inner">
								<div className="carousel-item active ">
									<div className="project-slide">
										<p className="project-title"> BookMark </p>
										<video
											playsInline="playsinline"
											muted="muted"
											loop="loop"
											className="project-video"
											poster="https://codepen.io/theElkman/pen/aNyeoL/image/large.png"
										>
											<source src={BookmarkDemo} type="video/mp4" />
										</video>
										<div className="project-description">
											<h4>Summary</h4>
											<p>
												A site where users may store their favorite sites all in
												one place, and browse by sections to view their saved
												sites.
											</p>
											<h4>Tech Stack</h4>
											<p>
												React | React Hooks | Redux | CSS3 | Material-UI
												Framework | Express | SQLite3 | Axios | Bcryptjs{" "}
											</p>
										</div>
										<div className="button-container">
											<a
												href="https://quizzical-blackwell-d608a3.netlify.com/"
												target="_blank"
											>
												<button className="this">Live Site</button>
											</a>
											<a
												href="https://github.com/diaz4674/BookMark/tree/master/FE-BookMark"
												target="_blank"
											>
												<button className="this">Github Repo</button>
											</a>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="project-slide">
										<p className="project-title"> Stay at Home Moms </p>
										<video
											playsInline="playsinline"
											muted="muted"
											loop="loop"
											className="project-video"
											poster="https://codepen.io/theElkman/pen/aNyeoL/image/large.png"
										>
											<source src={SAM} type="video/mp4" />
										</video>
										<div className="project-description">
											<h4>Summary</h4>
											<p>
												A meet up app for stay at home moms to create/attend
												events with other stay at home moms to create a
												supportive and communal community.
											</p>
											<h4>Tech Stack</h4>
											<p>
												{" "}
												React | Redux | React Bootstrap | CSS3 | Axios | Git{" "}
											</p>
										</div>
										<div className="button-container">
											<a
												href="https://ecstatic-boyd-937833.netlify.com/"
												target="_blank"
											>
												<button className="this">Live Site</button>
											</a>
											<a
												href="https://github.com/a-to-z-experiences-team/build-aToz-FE"
												target="_blank"
											>
												<button className="this">Github Repo</button>
											</a>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="project-slide">
										<p className="project-title"> Adobe Skills </p>
										<video
											playsInline="playsinline"
											muted="muted"
											loop="loop"
											className="project-video"
											poster="https://codepen.io/theElkman/pen/aNyeoL/image/large.png"
										>
											<source src={Lyftquest} type="video/mp4" />
										</video>
										<div className="project-description">
											<h4>Summary</h4>
											<p>
												Utilized Adobe Suite to produce better UI/UX experiences
												for sites
											</p>
											<h4>Adobe Stack</h4>
											<p> Illustrator | Premiere | Photoshop | Adobe XD </p>
										</div>
									</div>
								</div>
							</div>
							{/* Left and right controls */}
							<a
								className="carousel-control-prev"
								href="#demo"
								data-slide="prev"
							>
								<span className="carousel-control-prev-icon" />
							</a>
							<a
								className="carousel-control-next"
								href="#demo"
								data-slide="next"
							>
								<span className="carousel-control-next-icon" />
							</a>
						</div>
					</div>
				</div>
				{/* Optional JavaScript */}
				{/* jQuery first, then Popper.js, then Bootstrap JS */}
				{/* Links to custom JavaScript */}
				<footer>
					<div className="card-body">
						<div className="footerContainer" id="contactSection">
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
										>
											<img
												src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"
												alt="Github Icon"
												className="githubIcon"
											/>
											<p className="githubText"> Github </p>
										</a>
										<a
											href="https://www.linkedin.com/in/miguel-diaz-a2114512a"
											target="_blank"
											className="linkedinAnchorFooter"
											style={{ textDecoration: "none" }}
										>
											<img
												src={Linkedin}
												alt="LinkedIn Icon"
												className="linkedinIcon"
											/>
											<p className="linkedinText"> Linkedin </p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Professional;
