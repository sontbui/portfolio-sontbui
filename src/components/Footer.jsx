import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import {Typography} from "@mui/material";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const {t} = useTranslation();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <Typography variant="h3" style={{fontFamily: 'Inter, sans-serif' }}>
            {t('footer.developBy')}
            
            </Typography>
        </Col>
        <Col md="4" className="footer-copywright">
        <Typography variant="h3" style={{fontFamily: 'Inter, sans-serif' }}>
          {/* {t('footer.copyRight')} © {year} SB */}
          </Typography>
          
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/sontbui"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sontbui2783/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/son.tbui.278"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/sontbui/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
