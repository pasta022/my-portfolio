import {
  Email,
  GitHub,
  KeyboardDoubleArrowRight,
  LinkedIn,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import image from "../image/profilePic.png";
import reactLogo from "../image/react-logo.png";
import jsLogo from "../image/js-logo.png";
import htmlLogo from "../image/html-logo.png";
import cssLogo from "../image/css-logo.png";
import wpLogo from "../image/wp-logo2.png";
import { projects } from "../data";
import Project from "../components/Project";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #1c2025;
  padding: 0 100px;
  color: whitesmoke;

  ${mobile({
    padding: "20px",
  })}
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  ${mobile({
    flexDirection: "column",
  })}
`;

const InfoLeft = styled.div`
  flex: 1;
  min-width: 200px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const InfoImage = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  object-fit: cover;
`;

const InfoRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
`;

const Name = styled.h1`
  text-align: left;
  margin: 20px 0;
`;

const Bio = styled.p`
  text-align: left;
  font-weight: 200;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ContactButton = styled.button`
  padding: 10px 30px;
  background-color: #10f0fc;
  border-radius: 5px;
  border: none;
  font-weight: 600;
`;

const About = styled.div``;

const Title = styled.h2`
  text-align: left;
  font-size: 28px;
  font-weight: 600;
`;

const AboutInfo = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: 300;

  ${mobile({
    fontSize: "16px",
    fontWeight: "200",
  })}
`;

const StacksContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;

  ${mobile({
    flexWarp: "warp",
  })}
`;

const Stack = styled.img`
  height: 80px;
  width: 80px;
  margin-right: 10px;
  object-fit: cover;

  ${mobile({
    height: "50px",
    width: "50px",
  })}
`;

const Projects = styled.div`
  margin: 100px 0;
`;

const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column",
  })}
`;

const More = styled.a`
  text-align: right;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;

  &:hover {
    color: #10f0fc;
  }
`;

const Span = styled.span`
  margin-right: 5px;
`;

const Footer = styled.div`
  width: 100vw;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p``;

const Home = () => {
  return (
    <Container>
      <Info>
        <InfoLeft>
          <InfoImage src={image} />
        </InfoLeft>
        <InfoRight>
          <Name>Anu Olajide</Name>
          <Bio>
            Hi! I am a software developer with a passion for learning and
            creating
          </Bio>
          <Contact>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <ContactButton>CONTACT ME</ContactButton>
            </Link>
          </Contact>
        </InfoRight>
      </Info>
      <About>
        <Title>About</Title>
        <AboutInfo>
          Welcome to my portfolio! I am an aspiring software developer with a
          passion for crafting elegant and efficient solutions to real-world
          problems. I have a keen interest in web development and have dedicated
          time to mastering front-end technologies. Creating responsive,
          user-friendly websites and web applications is an area where I find
          immense satisfaction. My proficiency in HTML, CSS, and React allows me
          to bring digital experiences to life. In this fast-paced industry, I
          recognize the importance of staying updated with the latest trends and
          technologies. I am committed to continuous learning and actively seek
          opportunities for professional development. I am currently working on
          personal projects to expand my skills and deepen my understanding of
          full-stack development. My technical skills include:- web development,
          problem solving, version control and proficiency inprogramming
          languages i.e. Javascript
        </AboutInfo>
        <StacksContainer>
          <Stack src={reactLogo} />
          <Stack src={jsLogo} />
          <Stack src={htmlLogo} />
          <Stack src={cssLogo} />
          <Stack src={wpLogo} />
        </StacksContainer>
      </About>
      <Projects>
        <Title>Projects</Title>
        <ProjectsContainer>
          {projects.map((project) => {
            return <Project p={project} key={project.id} />;
          })}
        </ProjectsContainer>
        <More href="https://github.com/pasta022?tab=repositories">
          <Span>See more projects</Span>
          <KeyboardDoubleArrowRight />
        </More>
      </Projects>
      <Footer>
        <FooterText> &copy; 2023 </FooterText>
      </Footer>
    </Container>
  );
};

export default Home;
