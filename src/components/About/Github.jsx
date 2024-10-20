import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Github() {
  const {t} = useTranslation();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Typography variant="h4" sx={{ fontFamily: 'Orbitron', marginBottom:'10px' }} className="project-heading">
        {t('github.dayI')} <strong className="purple">{t('github.code')}</strong>
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
