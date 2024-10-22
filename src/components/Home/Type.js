import React from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

function Type() {
  const {t} = useTranslation();
  return (
    <Typewriter
      options={{
        strings: [
          t('type.backend'),
          t('type.tester'),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
