import React from "react";
import style from "styled-components";

const AppLogo = () => {
  return (
    <AppLogoWrapper>
      <img src="../appLogo.png" />
    </AppLogoWrapper>
  );
};

export default AppLogo;

const AppLogoWrapper = style.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 200px;
    }
`;
