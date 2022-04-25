import styled from "@emotion/styled";
import { COLOR } from "styles";

export const LoginContainer = styled.form`
    position: relative;

    display: flex;
    flex-direction: column;

    margin: auto;
    padding: 1rem;

    border-radius: 0.4rem;
    background-color: ${COLOR.WHITE_1};
    color: ${COLOR.BLACK_1};
`;

export const LoginLabel = styled.label`
    position: relative;
`;

export const LoginInput = styled.input`
    width: 100%;
    height: 3rem;

    margin-bottom: 1rem;
    padding: 0.5rem 1rem;

    border-radius: 0.3rem;
    border: 1.5px solid ${({ error }) => (error ? COLOR.RED : "rgba(0, 0, 0, 0.2)")};

    font-size: 16px;

    &:focus-within {
        border-color: ${COLOR.PRIMARY};
    }
`;

export const LoginError = styled.div`
    position: absolute;
    top: 3.05rem;
    left: 1rem;

    color: ${COLOR.RED};
    font-size: 12px;
`;
