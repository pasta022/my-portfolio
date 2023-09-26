import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Code, CodeOff } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #1c2025;
  color: white;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  margin: 20px;
  padding: 20px;
  color: #10f0fc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const Icon = styled.div``;

const Links = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: white;
  font-size: 18px;

  ${mobile({
    width: "60%",
    fontSize: "14px",
  })}
`;

const LinkContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  font-weight: 400;
  &:hover {
    color: #10f0fc;
  }
`;

const Button = styled.button`
  border: 1px solid #10f0fc;
  padding: 10px;
  background-color: #1c2025;
  color: #10f0fc;
  font-weight: 600;

  &:hover {
    color: #1c2025;
    background-color: #10f0fc;
  }
`;

const Navbar = () => {
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsChange(!isChange);
    }, 5000);
  }, [isChange]);
  return (
    <Container>
      <Nav>
        <IconContainer>
          <Icon>
            {isChange ? (
              <Code sx={{ fontSize: "32px" }} />
            ) : (
              <CodeOff sx={{ fontSize: "32px" }} />
            )}
          </Icon>
        </IconContainer>
        <Links>
          <LinkContainer>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Home
            </Link>
          </LinkContainer>
          <LinkContainer>
            <Button>
              <Link
                to="/Contact"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Hire Me
              </Link>
            </Button>
          </LinkContainer>
        </Links>
      </Nav>
    </Container>
  );
};

export default Navbar;
