import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function About() {
  const {t} = useTranslation();
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Typography variant="h4" sx={{ fontFamily: "Orbitron", fontSize: "2.1em", fontWeight: 600 }}>
              {t('about.know')}
              <strong className="purple">{t('about.im')}</strong>
            </Typography>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Typography variant="h4" sx={{fontFamily:'Orbitron'}} className="project-heading">
          <strong className="purple">{t('about.skillSet')} </strong>
        </Typography>
        <Techstack />
          
        <Typography variant="h4" sx={{fontFamily:'Orbitron'}} className="project-heading">
        <strong className="purple">{t('about.tool')}</strong> 
        {t('about.iUse')}
        </Typography>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
