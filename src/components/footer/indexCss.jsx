import style from "styled-components";

export const FooterWrapper = style.div`
    // border: 1px solid red;
    width: 60%;
    margin-bottom: 30px;

    .footer--links {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            color: #616161;
            margin: 0;
            font-size: 16px;
            font-family: 'Mulish', sans-serif;
            cursor: pointer;
        }
    }

    .footer--copy {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 12px;

        p {
            color: #616161;
            margin: 0;
            font-size: 16px;
            font-family: 'Mulish', sans-serif;
        }
    }
`;
