import React, { useState } from "react";
import { LoginWrapper } from "./loginCss";
import AppLogoBox from "@components/appLogo";
import AuthInput from "@components/inputs/authInput";
import { AuthBtn, SocialBtn } from "@components/buttons/index";
import Footer from "@components/footer/index";

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
              <div className="login--content__body-sublinks">
                <div className="login--content__body-sublinks-1">
                  <input type="checkbox" />
                  <div className="login--content__body-sublinks-1_text">
                    <p>Souviens-toi de moi</p>
                  </div>
                </div>
                <h3>Mot de passe oublié?</h3>
              </div>
              <div className="login--content__body--btn">
                <AuthBtn />
              </div>
            </div>
            <div className="login--content__body-item2">
              <SocialBtn title="Connectez-vous avec MPESA" img="../pesa.png" bg="#212121" />
              <SocialBtn title="Connectez-vous avec Facebook" img="../fb.png" bg="#1877F2" />
              <SocialBtn title="Connectez-vous avec Google" img="../goo.png" bg="#fff" color="#353535" />
            </div>
          </div>
        </div>
        <div className="footer--box">
          <Footer />
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
