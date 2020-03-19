import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Test from "./vid2.mp4";
import Carousel from "react-bootstrap/Carousel";
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

const Text = styled.p`
  margin: 0;
  font-size: 20px;
  display: flex;
  font-weight: 100;
  justify-content: center;
  align-items: center;
  font-family: "raleway-bold";
  color: black;
  /* padding: 15px; */
  /* text-transform: uppercase; */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Live = styled.a`
  margin: 20px 10px 0;
  transition: all 0.8s;
  background-color: #fffb9b;
  border: 0.4px solid black;
  color: black;
  font-family: Bangers;
  font-size: 25px;
  padding: 5px 20px;

  &:hover {
    color: white;
    box-shadow: 0px 4px 23px black;
    -webkit-text-stroke: 1px black;
    background-color: #f5bd07;
    text-decoration: none;
    font-size: 28px;
  }
`;

const GitRepo = styled.a`
  margin: 20px 10px 0;
  transition: all 0.8s;
  background-color: #fffb9b;
  border: 0.4px solid black;
  color: black;
  font-family: Bangers;
  font-size: 25px;
  padding: 5px 20px;

  &:hover {
    color: white;
    box-shadow: 0px 4px 23px black;
    -webkit-text-stroke: 1px black;
    background-color: #f5bd07;
    text-decoration: none;
    font-size: 28px;
  }
`;
export default Projects;
