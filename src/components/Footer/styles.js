import styled from "@emotion/styled";
import { BG_COLOR, COLOR, CONTAINER } from "styles";

export const FooterContainer = styled.footer`
    margin-top: auto;
    width: 100%;
    background: ${BG_COLOR.G01};
`;

export const FooterBody = styled.div`
    ${CONTAINER}
`;

export const FooterMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;
`;

export const FooterFooter = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 3rem;
    border-top: 2px solid rgba(255, 255, 255, 0.3);
    font-size: 13px;
`;
