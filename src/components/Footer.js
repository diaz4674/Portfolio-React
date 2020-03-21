import React from "react";
import styled from "styled-components";
import Git from "../icons/Git.png";
import Linkedin from "../icons/linkedin.png";
import Email from "../icons/mail.png";
import Phone from "../icons/phone.png";

class Footer extends React.Component {
  state = {
    linkedIn: false,
    Github: false
  };

  toggleGit = () => {
    this.setState({ Github: !this.state.Github });
  };

  toggleLinkedIn = () => {
    this.setState({ linkedIn: !this.state.linkedIn });
  };

  render() {
    return (
      <Container>
        <LeftSection>
          <ContactContainer>
            <Title> Contact Information </Title>
            <SubContainer>
              <Icons src={Phone} alt="phone" />
              <Text>Phone: (415) 858-5179 </Text>
            </SubContainer>
            <SubContainer>
              <Icons src={Email} alt="Email" />
              <a href="mailto:diaz4674@gmail.com">
                {" "}
                <Text>Email: diaz4674@gmail.com</Text>{" "}
              </a>
            </SubContainer>
          </ContactContainer>
        </LeftSection>
        <RightSection>
          <Title>Social</Title>
          <SocialIconContainer>
            <IconContainer
              onMouseEnter={this.toggleGit}
              onMouseLeave={this.toggleGit}
            >
              <NewTab
                target="_blank"
                href="https://github.com/diaz4674"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={Git}
                  alt="Github"
                  style={{
                    height: "2em",
                    transition: "ease 0.3s",
                    marginBottom: "10px",
                    transform: this.state.Github ? "scale(1.5, 1.5)" : ""
                  }}
                />
                <p
                  style={{
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "raleway-bold",
                    color: "black",
                    transition: "ease 0.3s",
                    transform: this.state.Github ? "scale(1.1, 1.1)" : ""
                    // textShadow: this.state.Github ? "1.5px 1.5px gray" : ""
                  }}
                >
                  {" "}
                  Github{" "}
                </p>
              </NewTab>
            </IconContainer>
            <IconContainer
              onMouseEnter={this.toggleLinkedIn}
              onMouseLeave={this.toggleLinkedIn}
            >
              <NewTab
                target="_blank"
                href="https://www.linkedin.com/in/diaz4674/"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={Linkedin}
                  alt="Linkedin"
                  style={{
                    height: "2em",
                    transition: "ease 0.3s",
                    marginBottom: "10px",
                    transform: this.state.linkedIn ? "scale(1.5, 1.5)" : ""
                  }}
                />
                <p
                  style={{
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "raleway-bold",
                    color: "black",
                    transition: "ease 0.3s",
                    transform: this.state.linkedIn ? "scale(1.1, 1.1)" : ""
                    // textShadow: this.state.linkedIn ? "1.5px 1.5px gray" : ""
                  }}
                >
                  {" "}
                  LinkedIn{" "}
                </p>
              </NewTab>
            </IconContainer>
          </SocialIconContainer>
        </RightSection>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.25rem;
  border: 0;
  margin: 0;
  background-color: white;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  border-right: 1.4px solid #d6d6d6;
  @media (max-width: 960px) {
    margin: 20px 0;
    border-right: 0px solid;
    border-bottom: 1.4px solid #d6d6d6;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: 25px;
`;

const SocialIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const RightSection = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  font-size: 1.5em;
  display: flex;
  font-weight: 550;
  justify-content: center;
  font-family: "raleway-bold";
  margin: 0;
`;

const SubContainer = styled.div`
  vertical-align: baseline;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
`;

const Icons = styled.img`
  height: 2em;
  margin: 0 20px;
`;

const NewTab = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

export default Footer;
