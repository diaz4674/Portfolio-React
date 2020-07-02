import React from "react";
import styled from "styled-components";
import VideoOne from "./LandingVideos/vid1.mp4";
import VideoTwo from "./LandingVideos/vid2.mp4";

//Landing Page Video Component
class Video1 extends React.Component {
	state = {
		//State toggler to swap videos being rendered
		video1Finished: false,
		loading: true,
	};
	componentDidMount = () => {
		// this.playVideo();
	};

	// componentWillUnmount = () => {
	// 	this.pauseVideo();
	// };

	playVideo = () => {
		// plays video when component mounts
		this.refs.vidRef.play();
	};

	// pauseVideo = (e) => {
	// 	e.preventDefault();
	// 	// Pauses video when component unmounts
	// 	this.refs.vidRef.pause();
	// };
	switchVideo = async () => {
		//When First video ends, switches to second video which is capable
		//of renerding a seamless continuous loop of the waves and flowing cape
		await this.setState({ video1Finished: true });
	};

	render = () => {
		// Non Styled-Components because of the ability to read state
		const StartVideo = {
			position: "relative",
			//Intro video that hides after it finishes and toggles the state
			zIndex: this.state.video1Finished ? "0" : "2",
			opacity: this.state.video1Finished ? "0" : "1",
			width: "100%",
			// transition: "ease .1s"
		};

		const Video2 = {
			position: "absolute",
			zIndex: this.state.video1Finished ? "2" : "0",
			opacity: this.state.video1Finished ? "1" : "0",
			transition: "ease .1s",
			width: "100%",
		};

		return (
			<Container>
				<video
					// Second part of video that has the continuous looponce all images settle
					style={Video2}
					ref="vidRef"
					src={VideoTwo}
					type="video/mp4"
					loop
					autoPlay
					playsInline
					muted
				/>
				<video
					// Start of video that has the icons popping into view
					style={StartVideo}
					ref="vidRef"
					onEnded={this.switchVideo}
					src={VideoOne}
					type="video/mp4"
					autoPlay
					playsInline
					muted
					onLoadedData={this.props.start}
				/>
			</Container>
		);
	};
}

// styled components
const Container = styled.div`
	position: relative;
	width: 100%;
	transition: ease 0.1s;
	top: -119px;

	@media (max-width: 1850px) {
		top: -115px;
	}
	@media (max-width: 1800px) {
		top: -109px;
	}
	@media (max-width: 1600px) {
		top: -80px;
	}
	@media (max-width: 1500px) {
		top: -60px;
	}
	@media (max-width: 1500px) {
		top: -30px;
	}
	@media (max-width: 1200px) {
		top: 0px;
	}
`;

export default Video1;
