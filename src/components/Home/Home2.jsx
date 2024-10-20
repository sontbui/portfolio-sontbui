import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactRoundedImage from "react-rounded-image"
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import avatar from "../../Assets/son.jpg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Typography } from "@mui/material";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Typography style={{ fontFamily: "Orbitron", fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </Typography>
            <Typography className="home-about-body" style={{ fontFamily: "Orbitron" }}>
            I have skills in 
            <span className="purple">web development, mobile development, and software testing,</span> 
            with experience using tools like 
            <span className="purple">Selenium for automation testing.</span>
            </Typography>
            <Typography className="home-about-body" style={{ fontFamily: "Orbitron", fontStyle:'italic' }}>
            <strong>I'm passionate about creating practical applications and always eager to learn and collaborate on new projects.</strong>
            {/* <span style={{fontStyle:'italic'}} className="purple"> C++, Javascript and Go. </span> */}
            </Typography>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
              {/* <ReactRoundedImage image={avatar} /> */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <Typography variant="h5" style={{ fontFamily: "Orbitron" }}>CONTACT WITH ME</Typography>
            <Typography style={{ fontFamily: "Orbitron" }}>
              Feel free to <span className="purple">connect </span>with me
            </Typography>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sontbui"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/son.tbui.278"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sontbui2783/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sontbui/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
