import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Typography } from "@mui/material";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Typography variant="h4" sx={{ fontFamily: 'Orbitron' }} className="project-heading">
        Days I <strong className="purple">Code</strong>
      </Typography>

      <GitHubCalendar
        username="sontbui"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
