import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Close, Code, CodeOff, Menu } from "@mui/icons-material";
import { mobile } from "../responsive";
import "./styles/navbar.css";

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
  width: 60%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-right: 10px;
  color: white;
  font-size: 18px;

  ${mobile({
    fontSize: "18px",
    position: "fixed",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    gap: "1.5rem",
    backgroundColor: "#1c2025",
    // transition: "1s",
    // transform: "translateY(-120vh)",
    // zIndex: "99",
    flexDirection: "column",
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

  ${(props) =>
    props.$top &&
    css`
      ${mobile({
        marginTop: "6em",
      })}
    `}
`;

const CVLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Button2 = styled.button`
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  display: none;
  color: #10f0fc;

  ${(props) =>
    props.$btnClose &&
    css`
      position: absolute;
      top: 2rem;
      right: 2rem;
    `}

  ${(props) =>
    props.$menu &&
    css`
      width: 50px;
      height: 50px;
      margin: 20px;
      padding: 20px;
      color: #10f0fc;
      align-items: center;
      justify-content: center;
    `}

  ${mobile({
    display: "flex",
  })}
`;

const Navbar = () => {
  const [isChange, setIsChange] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const navRef = useRef();

  const showNavBar = () => {
    setIsToggle((prevState) => !prevState);
  };

  const clickLink = () => {
    // navRef.current.classList.add("hide-nav");
    // setTimeout(() => {
    //   navRef.current.classList.remove("hide-nav");
    // }, 1000);
    // navRef.current.classList.remove("show-nav");
    setIsToggle(false);
  };

  useEffect(() => {
    if (isToggle) {
      navRef.current.classList.add("show-nav");
      navRef.current.classList.remove("hide-nav");
    } else {
      navRef.current.classList.add("hide-nav");
      navRef.current.classList.remove("show-nav");
    }
  }, [isToggle]);

  useEffect(() => {
    setTimeout(() => {
      setIsChange(!isChange);
    }, 5000);
  }, [isChange]);

  return (
    <Container>
      <Nav>
        <IconContainer>
          <Link to="/" style={{ textDecoration: "none", color: "#10f0fc" }}>
            <Icon>
              {isChange ? (
                <Code sx={{ fontSize: "32px" }} />
              ) : (
                <CodeOff sx={{ fontSize: "32px" }} />
              )}
            </Icon>
          </Link>
        </IconContainer>
        <Links ref={navRef}>
          <LinkContainer onClick={clickLink} $top>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Home
            </Link>
          </LinkContainer>
          <LinkContainer onClick={clickLink}>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Projects
            </Link>
          </LinkContainer>
          <LinkContainer onClick={clickLink}>
            <CVLink
              href={`${process.env.PUBLIC_URL}/media/Resume.pdf`}
              download="my resume"
            >
              Download Resumé
            </CVLink>
          </LinkContainer>
          <LinkContainer onClick={clickLink}>
            <Link
              to="/Contact"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Hire Me
            </Link>
          </LinkContainer>
          <Button2 onClick={showNavBar} $btnClose>
            <Close />
          </Button2>
        </Links>
        <Button2 onClick={showNavBar} $menu>
          <Menu sx={{ fontSize: "32px" }} />
        </Button2>
      </Nav>
    </Container>
  );
};

export default Navbar;
