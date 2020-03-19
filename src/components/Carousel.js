import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import Test from "./vid2.mp4";

// const Video = {
//   position: "relative",
//   display: "none",
//   float: "left",
//   width: "100%",
//   marginRight: "-100%"
// };
class Projects extends React.Component {
  render() {
    return (
      <Container>
        <Carousel indicators={false}>
          <Carousel.Item>
            <Video
              ref="vidRef"
              onEnded={this.switchVideo}
              src={Test}
              type="video/mp4"
              loop
              autoPlay
              playsInline
              muted
              controls
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <Video
              // className="d-block w-100"
              src={Test}
              alt="First slide"
              loop="loop"
              autoPlay
              ref="vidRef"
              type="video/mp4"
              playsinline="playsinline"
              controls
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <Video
              // className="d-block w-100"
              src={Test}
              alt="First slide"
              loop="loop"
              autoPlay
              ref="vidRef"
              type="video/mp4"
              playsinline="playsinline"
              controls
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

const Video = styled.video`
  width: 100%;
`;

export default Projects;
