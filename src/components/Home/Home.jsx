import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import homeImage from "../../Assets/homeImage.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Home() {
  const {t} = useTranslation();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <Typography style={{ paddingBottom: 15, fontFamily: "Orbitron" }} className="heading">
                {t('home.hello')}{" "}
                <Typography variant="h7">
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </Typography>

              </Typography>
              <br />
              <Typography className="heading-name">
              {t('home.im')}
                <Typography variant="h3"><strong className="main-name"> {t('home.name')}</strong></Typography>
              </Typography>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Box>
                  <Typography variant="h5" style={{ fontFamily: "Orbitron", marginRight: '10px', fontStyle:'italic' }}>
                    <strong>{t('home.careerPath')}</strong>
                  </Typography>
                </Box>
                <Typography style={{ fontFamily: "Orbitron", display: "inline-flex", alignItems: "center" }}>
                  <Type />
                </Typography>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
