import React from "react";
import styled from "styled-components";
import Git from "../icons/Git.png";
import Linkedin from "../icons/linkedin.png";
import Email from "../icons/mail.png";
import Phone from "../icons/phone.png";

class Footer extends React.Component {
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
            <IconContainer>
              <Icons src={Git} alt="Github" />
              <Text> Github </Text>
            </IconContainer>
            <IconContainer>
              <Icons src={Linkedin} alt="Linkedin" />
              <Text> LinkedIn </Text>
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
  justify-content: space-around;
  padding: 60px 0;
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
  width: 100%;
  border-right: 1.4px solid #d6d6d6;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const RightSection = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  font-size: 1.5em;
  padding: 10px;
  display: flex;
  font-weight: 550;
  justify-content: flex-start;
  font-family: "raleway-bold";
  /* text-transform: uppercase; */
`;

const SubContainer = styled.div`
  vertical-align: baseline;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
`;

const Icons = styled.img`
  height: 2em;
`;
const Text = styled.p`
  margin: 0 10px;
  font-size: 20px;
  display: flex;
  /* font-weight: 100; */
  justify-content: center;
  align-items: center;
  font-family: "raleway-bold";
  /* text-transform: uppercase; */
`;

export default Footer;
