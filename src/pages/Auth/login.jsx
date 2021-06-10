import React, { useState } from "react";
import { LoginWrapper } from "./loginCss";
import AppLogoBox from "@components/appLogo";
import AuthInput from "@components/inputs/authInput";

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
          <div className="login--content__body">
            <div>
              <AuthInput title="Courriel ou numéro de téléphone" placeholder="Entrer ici" />
              <AuthInput title="Mot de passe" placeholder="Tapez votre mot de passe" type="password" />
            </div>
            <div>item 2</div>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
