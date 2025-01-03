import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
import LanguageSetion from "../layout/LanguageSection/index";
import { Typography } from '@mui/material';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from "react-i18next";
// import LanguageSection from "../layout/languageSection";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const {t} = useTranslation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" 
          style={{ width: '100%', height: 'auto' }}/> */}
          <Typography style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic' }}>
            SONTBUI
          </Typography>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <Typography style={{ fontFamily: 'Inter, sans-serif' }}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> {t('header.home')}
                </Typography>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <Typography style={{ fontFamily: 'Inter, sans-serif' }}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> 
                  {t('header.about')}
                </Typography>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <Typography style={{ fontFamily: 'Inter, sans-serif' }}>
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                 {t('header.project')}
                </Typography>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <Typography style={{ fontFamily: 'Inter, sans-serif' }}>
                  <CgFileDocument style={{ marginBottom: "2px" }} /> {t('header.resume')}
                </Typography>
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.LinkImBlog
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Typography style={{ fontFamily: 'Inter, sans-serif' }}>
                  <ImBlog style={{ marginBottom: "2px" }} /> Blogs
                </Typography>
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/sontbui/portfolio-sontbui.git"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
            
            <Nav.Item className="fork-btn">
              <LanguageSetion />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
