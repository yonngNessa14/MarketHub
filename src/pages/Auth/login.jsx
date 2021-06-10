import React, { useState } from "react";
import { LoginWrapper } from "./loginCss";
import AppLogoBox from "@components/appLogo";

const Login = () => {
  return (
    <LoginWrapper>
      <div className="login--wrapper">
        <div className="login--logo-box">
          <AppLogoBox />
        </div>
        <div className="login--content">
          <div className="login--content__title-box">
            <h2>Connectez-vous à Markethub</h2>
          </div>
          <div></div>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
