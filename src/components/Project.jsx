import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 10px 5px;
  padding: 10px 0;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #27282f;
  height: ${(props) => !props.project && "300px"};
  border-radius: 10px;
`;

const Image = styled.img`
  height: 40%;
  width: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

const Date = styled.p``;

const Title = styled.h4`
  margin: 0;
`;

const Link = styled.a`
  text-decoration: none;
  margin: 20px 0;

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  padding: 10px 30px;
  border: 1px solid #10f0fc;
  background-color: #27282f;
  color: #10f0fc;

  &:hover {
    cursor: pointer;
    background-color: #10f0fc;
    color: #27282f;
  }
`;

const Project = ({ p, project }) => {
  return (
    <Container>
      <ProjectContainer project={project}>
        <Image src={p.img} />
        <Details>
          <Date>{p.date}</Date>
          <Title>{p.title}</Title>
          <Link href={p.link}>
            <Button>View Project</Button>
          </Link>
        </Details>
      </ProjectContainer>
    </Container>
  );
};

export default Project;
