import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecommerce from "../../Assets/Projects/ecommerceWeb.jpg";
import chatBotApp from "../../Assets/Projects/chatBotApp.jpg";
import foodModel from "../../Assets/Projects/foodModel.png";
import questionModel from "../../Assets/Projects/questionModel.png";
import quizzApp from "../../Assets/Projects/quizzApp.jpg";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Projects() {
  const {t} = useTranslation();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Typography className="project-heading" style={{ fontFamily: 'Inter, sans-serif' }}>
          {t('project.my')}  <strong className="purple">{t('project.project')}  </strong>
        </Typography>
        <Typography style={{ fontFamily: 'Inter, sans-serif', color: 'white', marginTop: '20px' }}>
          {t('project.description')}
        </Typography>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce-Platform"
              description= {t('project.descriptionEcommerce')}
              ghLink="https://github.com/sontbui/E-commerce-Platform.git"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatBotApp}
              isBlog={false}
              title="Craft Social Media"
              description= {t('project.descriptionChatBot')}
              ghLink="https://github.com/sontbui/Craft-Social-Open-Last.git"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          {/* none link github */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodModel}
              isBlog={false}
              title="Food Recognition Pre-Train"
              description= {t('project.descriptionFoodModel')}
              ghLink="/"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
          {/* none link github */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={questionModel}
              isBlog={false}
              title="Question Answering Pre-Train"
              description= {t('project.descriptionQuestionModel')}
              ghLink="/"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizzApp}
              isBlog={false}
              title="Quizz App Simple"
              description= {t('project.descriptionQuizzApp')}
              ghLink="https://github.com/sontbui/QuizAppFlutterFinal.git"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
