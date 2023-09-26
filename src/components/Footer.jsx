import React from "react";
import "../styles/Footer.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 30px;
`;

const Text = styled.p``;

const Footer = () => {
  return (
    <Container>
      <Text> &copy; 2023 </Text>
    </Container>
  );
};

export default Footer;
