import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Description from "./Description";
import BookmarkDemo from '../DemoVideos/bookmarkDemo.mp4'
import SAM from '../DemoVideos/SAM.mp4'
import Alabastra from '../DemoVideos/Alabastra.mp4'
import Lyftquest from '../DemoVideos/Liftquest.mp4'

// Projects Card Container that is a react-bootstrap Carousel
class Projects extends React.Component {
  componentDidMount = () => {

  };

  componentWillUnmount = () => {
    this.pauseVideo();
  };

  playVideo = (e) => {
    // plays video when component mounts
    e.target.play();
  };

  pauseVideo = (e) => {
    // Pauses video when component unmounts
    e.target.pause();
  };

  render() {
    return (
      <Container>
        <Carousel
          onSelect={this.handleSelect}
          interval={false}
          data-interval={false}
          indicators={false}
        >
          <Carousel.Item className="carousel">
            <VideoContainer>
              <Title> LyftQuest </Title>
              <Video
                ref="vidRef"
                onEnded={this.switchVideo}
                src={Lyftquest}
                type="video/mp4"
                loop
                onMouseOver={this.playVideo}
                onMouseOut={this.pauseVideo}
                playsInline
                muted
              />
              <Description
                description="A workout tracker app that provides suggested workouts for users, and helps them track their progress."
                tech=" React | Redux | Auth0  | PostgreSQL | Styled Components | Git | Notion | Trello | Figma | PWA "
                link="https://liftquestapp.com/"
                gitrepo="https://github.com/workout-tracktor/labspt4-workout-tracker-FE"
              />
            </VideoContainer>
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <VideoContainer>
              <Title> Bookmark </Title>
              <Video
                ref="vidRef"
                onEnded={this.switchVideo}
                src={BookmarkDemo}
                type="video/mp4"
                loop
                onMouseOver={this.playVideo}
                onMouseOut={this.pauseVideo}
                playsInline
                muted
              />
              <Description
                description="A site where users may store their favorite sites all
              in one place, and browse by sections to view their saved sites."
                tech=" React | React Hooks | Redux | CSS3 | Material-UI Framework
              | Express | SQLite3 | Axios | Bcryptjs "
                link="https://quizzical-blackwell-d608a3.netlify.com/"
                gitrepo="https://github.com/diaz4674/BookMark"
              />
            </VideoContainer>
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <VideoContainer>
              <Title> Legends of Alabastra </Title>
              <Video
                ref="vidRef"
                onEnded={this.switchVideo}
                src={Alabastra}
                type="video/mp4"
                loop
                onMouseOver={this.playVideo}
                onMouseOut={this.pauseVideo}
                playsInline
                muted
              />
              <Description
                description="A pirate adventure game where the user competes with other players to be the most feared pirate"
                tech=" Python | Django | PostgreSQL | Pusher | React "
                link="https://hungry-spence-d1d30a.netlify.com/"
                gitrepo="https://github.com/legends-of-alabastra"
              />
            </VideoContainer>
          </Carousel.Item>
          <Carousel.Item className="carousel">
            <VideoContainer>
              <Title> Stay at Home Moms </Title>
              <Video
                ref="vidRef"
                onEnded={this.switchVideo}
                src={SAM}
                type="video/mp4"
                loop
                onMouseOver={this.playVideo}
                onMouseOut={this.pauseVideo}
                playsInline
                muted
              />
              <Description
                description="A meet up app for stay at home moms to create/attend events with other stay at home moms to create a supportive and communal community."
                tech="React | Redux | React Bootstrap | CSS3 | Axios | Git"
                link="https://ecstatic-boyd-937833.netlify.com/"
                gitrepo="https://github.com/a-to-z-experiences-team/build-aToz-FE"
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
  width: 70%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 15px 15px;
`;
const Video = styled.video`
  /* margin: 20px 0; */
  width: 100%;
`;

const Title = styled.p`
  color: black;
  font-family: Bangers;
  font-size: 37px;
`;

export default Projects;
