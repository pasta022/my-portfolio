import React from "react";
import styled from "styled-components";
import Project from "../components/Project";
import { projects } from "../data";
import { mobile } from "../responsive";

const Title = styled.h1`
  margin: 0;
  color: whitesmoke;
`;

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
`;

const ProjectsDiv = styled.div`
  width: 80%;

  ${mobile({
    width: "90%",
  })}
`;

const Projects = () => {
  return (
    <>
      <Title>Projects</Title>
      <ProjectsContainer>
        <ProjectsDiv>
          {projects.map((project) => {
            return <Project p={project} key={project.id} project />;
          })}
        </ProjectsDiv>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
