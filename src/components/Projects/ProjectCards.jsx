import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Typography, Box } from "@mui/material";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" width={'100%'} height={'300px'} />
      <Card.Body>
        <Card.Title>
          <Typography sx={{ fontFamily: 'Orbitron' }}>
            <strong className="purple">{props.title}</strong>
          </Typography>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <Typography sx={{ fontFamily: 'Orbitron' }}>
            {props.description}
          </Typography>
        </Card.Text>

        <Box  display="flex" 
        justifyContent="center" 
        style={{ padding: '10px' }}>
          <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginTop: '10px' }}>
            <Typography sx={{ fontFamily: 'Orbitron' }}>
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Typography>
          </Button>
         
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "15px", marginTop: '10px' }}
            >
              <Typography sx={{ fontFamily: 'Orbitron' }}>
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Typography>
            </Button>
          )}
        </Box>
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
