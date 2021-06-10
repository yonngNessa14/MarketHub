import style from "styled-components";

export const LoginWrapper = style.div`
    
    height: 100vh;
    width: 100vw;

    .login--wrapper {
        width: 50%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;

        .login--logo-box {
            width: 100%;
            margin: 55px 0;
        }

        .login--content {
            .login--content__title-box {
                margin-bottom: 40px;
                h2 {
                    color: #353535;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 700;
                    font-size: 26px;
                    margin: 0;
                }
            }

            .login--content__body {
                display: flex;
                justify-content: space-between;
                margin-top: 25px;

                .login--content__body-sublinks {
                    // border: 1px solid red;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .login--content__body-sublinks-1 {
                        display: flex;
                        align-items: center;

                        input {
                            background: #E60000 !important;
                            margin: 0;
                            &:focus {
                                background: #E60000 !important;
                            }
                        }

                        input[type=checkbox] {
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;
                            /* create custom checkbox appearance */
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                            padding: 3px;
                            /* background-color only for content */
                            background-clip: content-box;
                            // border: 1.5px solid #bbbbbb;
                            border-radius: 3px;
                            // background-color: #e7e6e7;
                            margin-left: 15px;
                            margin-right: 15px;
                        
                            &:checked{
                                // background-color: #ff0000;
                                color: white;
                            }
                        
                            &:focus{
                                outline: none !important;
                            }
                        }

                        .login--content__body-sublinks-1_text {
                            margin-left: 10px;
                            display: flex;
                            align-items: center;

                            p {
                                font-family: 'Manrope', sans-serif;
                                font-weight: 400;
                                font-size: 14px;
                                // line-height: 165%;
                                color: #353535;
                                margin: 0;
                            }
                        }
                    }
                    
                    h3 {
                        color: #E60000;
                        margin: 0;
                        font-family: 'Manrope', sans-serif;
                        font-weight: bold;
                        font-size: 14px;
                    }
                }

                .login--content__body--btn {
                    margin-top: 40px;
                }
            }
        }
    }
`;
