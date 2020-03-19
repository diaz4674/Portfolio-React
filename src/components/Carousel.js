import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Description from "./Description";
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
          <Carousel.Item>
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
          <Carousel.Item>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 30px black;
  /* justify-content: center;
  align-items: center; */
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
  /* margin: 15px 0; */
`;

export default Projects;
