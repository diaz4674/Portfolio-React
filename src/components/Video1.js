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
    return (
      <Container>
        <Video
          ref="vidRef"
          onEnded={this.switchVideo}
          src={VideoOne}
          type="video/mp4"
        />
        <Video
          ref="vidRef"
          onEnded={this.switchVideo}
          src={VideoTwo}
          type="video/mp4"
        />

        <div>
          <button onClick={this.playVideo}>Play!</button>
          <button onClick={this.pauseVideo}>Pause!</button>
        </div>
      </Container>
    );
  };
}

const Container = styled.div`
  height: auto;
  width: 100%;
`;

const Video = styled.video`
  height: auto;
`;
export default Video1;
