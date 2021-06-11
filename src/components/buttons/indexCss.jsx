import style from "styled-components";

export const BtnWrapper = style.button`
    width: 100%;
    background: #E60000;
    border-radius: 30px;
    border: none;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    h4 {
        margin: 0;
        color: #fff;
        font-family: 'Manrope', sans-serif;
        font-weight: 700;
        font-size: 14px;
    }
`;

export const BtnSocialWrapper = style.button`
    width: 100%;
    background: ${(props) => props.bg};
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    border: none;
    margin-bottom: 10px;

    .social--btn-grid {
        display: flex;
        align-items: center;

        .social--btn-grid__img-box {
            // border: 1px solid red;
            width: 90px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 25px;
                margin: 0;
            }
        }

        h4 {
            margin: 0;
            color: ${(props) => props.color || "#fff"};
        }
    }

    
`;
