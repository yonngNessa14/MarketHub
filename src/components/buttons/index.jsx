import { BtnWrapper, BtnSocialWrapper } from "./indexCss";

export const AuthBtn = () => {
  return (
    <BtnWrapper>
      <h4>Connexion</h4>
    </BtnWrapper>
  );
};

export const SocialBtn = ({ bg, title, img, color }) => {
  return (
    <BtnSocialWrapper bg={bg} title={title} color={color}>
      <div className="social--btn-grid">
        <div className="social--btn-grid__img-box">
          <img src={img} className="img-fluid" />
        </div>
        <h4>{title}</h4>
      </div>
    </BtnSocialWrapper>
  );
};
