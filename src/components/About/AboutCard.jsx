import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <Box sx={{ textAlign: "justify" }}>
            <Typography variant="h6" sx={{ fontFamily: 'Orbitron' }}>
              Hi Everyone, I am <span className="purple">Bui Thanh Son </span>
              from <span className="purple"> Bao Loc City, Viet Nam</span>
            </Typography>
            <br />
            <Typography variant="h6" sx={{ fontFamily: 'Orbitron' }}>
              I am currently employed as a software developer at Juspay.
            </Typography>
            <br />
            <Typography variant="h6" sx={{ fontFamily: 'Orbitron' }}>
              I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
              Mesra.
            </Typography>
            <br />
            <Typography variant="h6" sx={{ fontFamily: 'Orbitron' }}>
              <span className="purple" style={{ fontWeight: 600 }}>Career path:  </span>
              <br />
              <strong>Short-term</strong>: Eager to secure a QA/QC Engineer Intern role to gain hands-on experience and deepen my understanding of
              software testing methodologies. My goal is to enhance my technical testing skills and problem-solving abilities, contributing to
              the overall quality of the product.
              <br />
              <br />
              <strong>Long-term</strong>: Over the next 3-4 years, I aim to progress to a Senior QA/QC Engineer position, acquiring comprehensive expertise
              in software testing and leading testing initiatives. My focus will be on delivering effective solutions and driving both team and
              company success.
            </Typography>
          </Box>
          <br/>
          <Typography sx={{fontFamily:'Orbitron', color:"rgb(155 126 172)"}}>
            "Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine."{" "}
          </Typography>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
