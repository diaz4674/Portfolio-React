import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Description from "./Description";
import Test from "../LandingVideos/vid2.mp4";

// Projects Card Container that is a react-bootstrap Carousel
class Projects extends React.Component {
  render() {
    return (
      <Container>
        <Carousel indicators={false} interval={false} data-interval={false}>
          <Carousel.Item
            interval={false}
            data-interval={false}
            className="carousel"
          >
            <VideoContainer>
              <Title> Bookmark </Title>
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
              <Description
                description="A site where users may store their favorite sites all in one place, and browse by sections to view their saved sites."
                tech=" React | React Hooks | Redux | CSS3 | Material-UI Framework |
                Express | SQLite3 | Axios | Bcryptjs "
                link="https://quizzical-blackwell-d608a3.netlify.com/"
                gitrepo="https://github.com/diaz4674/BookMark"
              />
            </VideoContainer>
          </Carousel.Item>
          <Carousel.Item
            interval={false}
            data-interval={false}
            className="carousel"
          >
            <VideoContainer>
              <Title> Bookmark </Title>
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
              <Description
                description="A site where users may store their favorite sites all in one place, and browse by sections to view their saved sites."
                tech=" React | React Hooks | Redux | CSS3 | Material-UI Framework |
                Express | SQLite3 | Axios | Bcryptjs "
                link="https://quizzical-blackwell-d608a3.netlify.com/"
                gitrepo="https://github.com/diaz4674/BookMark"
              />
            </VideoContainer>
          </Carousel.Item>
          <Carousel.Item
            interval={false}
            data-interval={false}
            className="carousel"
          >
            <VideoContainer>
              <Title> Bookmark </Title>
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
              <Description
                description="A site where users may store their favorite sites all in one place, and browse by sections to view their saved sites."
                tech=" React | React Hooks | Redux | CSS3 | Material-UI Framework |
                Express | SQLite3 | Axios | Bcryptjs "
                link="https://quizzical-blackwell-d608a3.netlify.com/"
                gitrepo="https://github.com/diaz4674/BookMark"
              />
            </VideoContainer>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 30px black;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 39px 0;
`;
const Video = styled.video`
  margin: 20px 0;
  width: 100%;
`;

const Title = styled.p`
  color: black;
  font-family: Bangers;
  font-size: 37px;
`;

export default Projects;
