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
import { useTranslation } from "react-i18next";

function Home2() {
  const {t} = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Typography style={{ fontFamily: "Orbitron", fontSize: "2.6em" }}>
             {t('home.letme')}
              <span className="purple"> {t('home.intro')}</span> 
              {t('home.myself')}
            </Typography>
            <Typography className="home-about-body" style={{ fontFamily: "Orbitron" }}>
            {t('home.haveSkill')}
            <span className="purple">
            {t('home.skill')}
              </span> 
              {t('home.withExperience')}
            <span className="purple">
            {t('home.tool')}
              </span>
            </Typography>
            <Typography className="home-about-body" style={{ fontFamily: "Orbitron", fontStyle:'italic' }}>
            <strong>
            {t('home.passionate')}
              </strong>
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
            <Typography variant="h5" style={{ fontFamily: "Orbitron" }}>
            {t('home.contact')}
              </Typography>
            <Typography style={{ fontFamily: "Orbitron" }}>
            {t('home.feelFree')} 
            <span className="purple">
            {t('home.connect')}
               </span>
               {t('home.withme')}
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
