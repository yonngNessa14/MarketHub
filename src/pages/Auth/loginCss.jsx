import style from "styled-components";

export const LoginWrapper = style.div`
    
    height: 100vh;
    width: 100vw;

    .login--wrapper {
        width: 60%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;

        .login--logo-box {
            width: 100%;
            margin: 45px 0;
        }

        .login--content {
            .login--content__title-box {
                h2 {
                    color: #353535;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 700;
                    font-size: 26px;
                }
            }
        }
    }
`;
