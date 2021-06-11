import React from "react";
import { FooterWrapper } from "./indexCss";

const Footer = () => {
  const navLinks = ["About Us", "Sell on Markethub", "Contact Us", "Terms", "Policies"];
  return (
    <FooterWrapper>
      <div className="footer--links">
        {navLinks.map((el, i) => {
          return <p key={i}>{el}</p>;
        })}
      </div>
      <div className="footer--copy">
        <p>Copyright © 2021 Vodacom DRC. All rights reserved.</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
