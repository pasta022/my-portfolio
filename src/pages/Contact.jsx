import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: white;
`;

const Text = styled.div`
  width: 50%;
  height: 50%;
`;

const Contact = () => {
  return (
    <Container>
      <Text>
        Uh-oh! This page is still under construction. Contact me at
        oluwamayowa00@gmail.com for hire
      </Text>
    </Container>
  );
};

export default Contact;
