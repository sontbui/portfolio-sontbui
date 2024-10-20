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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Typography className="project-heading" style={{ fontFamily: "Orbitron" }}>
          My  <strong className="purple">Projects </strong>
        </Typography>
        <Typography style={{ fontFamily: "Orbitron", color: 'white', marginTop: '20px' }}>
          Here are a few projects I've worked on recently.
        </Typography>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce-Platform"
              description="Users can create accounts and make online purchases. The system allows users to browse products, add them to their cart, and check out easily.The admin will monitor and process orders, ensuring smooth delivery. It utilizes Apache Kafka for data management and message transmission between services, while Zookeeper ensures configuration management and the state of the distributed system."
              ghLink="https://github.com/sontbui/E-commerce-Platform.git"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatBotApp}
              isBlog={false}
              title="Craft Social Media"
              description="Develop a Flutter application that integrates social media features, enabling users to build networks easily. The app will analyze user behavior for personalized recommendations. Users can create profiles, connect with friends, share content, and interact through comments and messages. Manage user data and posts efficiently using Firebase, with Firebase Authentication for secure sign-up and login.."
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
              description="Utilize pre-existing models like YOLO v8, YOLO v9, and CNN to retrain them with your custom dataset for improved food recognition. This process enhances the models' ability to accurately identify and classify various food items, leveraging established frameworks to achieve better performance. By fine-tuning these models, you can adapt them to recognize specific food categories relevant to your application, ensuring higher accuracy and efficiency."
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
              description="Leverage existing models to retrain a question-and-answer dataset for developing a model capable of responding to user inquiries. The models employed include BERT, PhoBERT, and ViderBerta-xsmall. The training process will involve fine-tuning these models to enhance their ability to accurately answer questions in Vietnamese. By utilizing these robust architectures, the system aims to improve the quality of responses and provide users with reliable information efficiently."
              ghLink="/"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizzApp}
              isBlog={false}
              title="Quizz App Simple"
              description="Develop a self-learning app for reviewing Object-Oriented Programming (OOP) topics. Utilize Flutter to create interactive quizzes that help users reinforce their understanding of key concepts. The app will feature various question types, such as multiple choice and true/false, allowing users to engage with the material effectively. Additionally, users can track their progress and receive instant feedback, making learning both fun and informative."
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
