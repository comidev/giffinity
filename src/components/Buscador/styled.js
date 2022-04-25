import styled from "@emotion/styled";
import { COLOR } from "styles";

export const BuscadorContainer = styled.div`
    background-color: ${COLOR.BLACK_2};
    width: 100%;
    height: 6rem;
    position: fixed;
    top: 5rem;
    padding-top: 1.5rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 50;
`;

export const BuscardorBody = styled.form`
    display: flex;
    align-items: center;
    background-color: #fff;
    color: #000;
    max-width: max-content;
    margin: 0 auto;

    &:focus-within {
        box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.2);
    }
`;
export const BuscadorIcon = styled.div`
    height: max-content;
    padding-top: 0.2rem;
    margin: auto 0.5rem;
`;
export const BuscadorInput = styled.input`
    margin: auto 0;
    padding: 0.5rem;
`;
