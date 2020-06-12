import React, { Component } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import Projects from "./Projects/Projects";
import Video1 from "./Video1";
import ScrollableAnchor from "react-scrollable-anchor";
import Tech from "./TechSection/Tech";
import Footer from "./Footer";
import Topbar from "./NavBar";
import BottomNav from "./BottomNav";
import ScrollAnimation from "react-animate-on-scroll";
import Loading from "./Loading";
// Header Video Style
const Vid1 = {
	width: "100%",
	objectFit: "fill",
};

class Landing extends Component {
	state = {
		loading: true,
	};

	start = async () => {
		await this.setState({ loading: false });
	};
	render() {
		const Container = {
			height: this.state.loading ? "100%" : "",
			overflow: this.state.loading ? "hidden" : "visible",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		};

		return (
			<div style={Container}>
				<Loading loading={this.state.loading} />
				<Head>
					<ScrollableAnchor id={"Home"}>
						<Topbar />
					</ScrollableAnchor>
				</Head>
				<Body>
					{/* ScrollableAnchor is used to navigate/auto scroll to the section once its selected
          from navbar */}
					<Video1 style={Vid1} start={this.start} />
					<AboutMeDiv>
						<ScrollAnimation
							animateIn="bounceInRight"
							animateOut="fadeOut"
							animateOnce={true}
						>
							<ScrollableAnchor id={"About_me"}>
								<Title> About Me </Title>
							</ScrollableAnchor>
							<AboutMeCoreDiv>
								<Tech />
								<AboutMe />
							</AboutMeCoreDiv>
						</ScrollAnimation>
					</AboutMeDiv>
					<ScrollAnimation
						animateIn="fadeIn"
						animateOut="fadeOut"
						animateOnce={true}
						style={{ width: "100%" }}
					>
						<ProjectsDiv>
							<Projects />
						</ProjectsDiv>
					</ScrollAnimation>
					<ScrollableAnchor id={"Contact"}>
						<Footer />
					</ScrollableAnchor>
					<BottomNav />
				</Body>
			</div>
		);
	}
}

const Body = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* height: 100%; */
	position: relative;
	width: 100%;
	background-color: #fffb9b;
`;

const Head = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
`;

const Title = styled.p`
	display: flex;
	justify-content: center;
	font-family: Bangers;
	align-items: center;
	font-size: 68px;
	padding-bottom: 10px;
	color: black;
`;
const AboutMeDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
	padding: 35px 0;
	margin: 0%;
`;

const AboutMeCoreDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding-top: 15px;
	width: 100%;
	justify-content: space-between;
	@media (max-width: 1230px) {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}
`;

const ProjectsDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0;
	background: linear-gradient(to right bottom, #fffb9b 55%, #cdcdcd 45%);
`;

export default Landing;
