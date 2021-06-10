import React from "react";
import style from "styled-components";

const AuthInputs = ({ width, title, placeholder, type }) => {
  return (
    <InputWrapper width={width}>
      <h3>{title}</h3>
      <div className="input--icon">
        <input placeholder={placeholder} />
        {type === "password" && (
          <div className="input--icon__box">
            <img src="../eye.png" />
          </div>
        )}
      </div>
    </InputWrapper>
  );
};

export default AuthInputs;

const InputWrapper = style.div`
    width: ${(props) => props.width || "400px"};
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 5px;
    margin-bottom: 20px;

    h3 {
        font-size: 12px;
        line-height: 16px;
        color: #757575;
        margin: 0;
    }

    .input--icon {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .input--icon__box {
            display: flex;
            align-items: center;
            cursor: pointer;

            img {
                width: 20px;
            }
        }

        input {
            border: none;
            width: 100%;
            margin-top: 5px;

            &:focus {
                border: none;
                outline: none;
            }

            &::placeholder {
                color: #959595;
                margin: 0;
                font-size: 14px;
                line-height: 19px;
                font-family: 'Manrope', sans-serif;
            }
        }
    }

    
`;
