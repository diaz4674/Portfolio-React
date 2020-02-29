import React from "react";
import styled from "styled-components";
import VideoOne from "./vid1.mp4";
import VideoTwo from "./vid2.mp4";

class Video1 extends React.Component {
  state = {
    video1Finished: false
  };
  componentDidMount = () => {
    this.playVideo();
  };

  componentWillUnmount = () => {
    this.pauseVideo();
  };

  playVideo = () => {
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play();
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
  };

  switchVideo = async () => {
    console.log(this.state);
    await this.setState({ video1Finished: true });
    console.log(this.state);
  };

  render = () => {
    const StartVideo = {
      // height: "90vh",
      position: "relative",
      zIndex: this.state.video1Finished ? "0" : "2",
      opacity: this.state.video1Finished ? "0" : "1",
      width: "100%"
    };

    const Video2 = {
      // height: "90vh",
      position: "absolute",
      zIndex: this.state.video1Finished ? "2" : "0",
      opacity: this.state.video1Finished ? "1" : "0",

      width: "100%"
    };

    return (
      <Container>
        <video
          style={Video2}
          ref="vidRef"
          onEnded={this.switchVideo}
          src={VideoTwo}
          type="video/mp4"
          loop
          autoPlay
          muted
        />

        <video
          style={StartVideo}
          ref="vidRef"
          onEnded={this.switchVideo}
          src={VideoOne}
          type="video/mp4"
          autoPlay
          muted
        />
      </Container>
    );
  };
}

const Container = styled.div`
  /* height: 90vh; */
  top: -139px;
  position: relative;
  width: 100%;
`;

export default Video1;
