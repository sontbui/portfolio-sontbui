import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const {t} = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <Box sx={{ textAlign: "justify" }}>
            <Typography variant="h6" sx={{ fontFamily: 'Orbitron' }}>
              {t('aboutCard.hello')}
              <span className="purple">{t('aboutCard.name')} </span>
              {t('aboutCard.from')} 
              <span className="purple"> {t('aboutCard.hometown')}</span>
            </Typography>
            <br />
            <Typography variant="h6" sx={{ fontFamily: 'Orbitron' }}>
            {t('aboutCard.detail')} 
            </Typography>
            <br />
            <Typography variant="h6" sx={{ fontFamily: 'Orbitron' }}>
            {t('aboutCard.subDetail')} 
            </Typography>
            <br />
            <Typography variant="h6" sx={{ fontFamily: 'Orbitron' }}>
              <span className="purple" style={{ fontWeight: 600 }}> {t('aboutCard.careerPath')}</span>
              <br />
              <br/>
              <strong>{t('aboutCard.shortTerm')}</strong>
              {t('aboutCard.detailShortTerm')}
              <br />
              <br />
              <strong>{t('aboutCard.longTerm')}</strong>
              {t('aboutCard.detailLongTerm')}
            </Typography>
          </Box>
          <br/>
          <Typography sx={{fontFamily:'Orbitron', color:"rgb(155 126 172)"}}>
            {t('aboutCard.sologan')}{" "}
          </Typography>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
