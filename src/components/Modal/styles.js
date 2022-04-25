import styled from "@emotion/styled";
import { COLOR } from "styles";

export const ModalContainer = styled.div`
    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 20000;

    backdrop-filter: blur(5px);
`;
export const ModalContent = styled.div`
    position: relative;
    margin: 0 auto;
    width: 90%;
    max-width: 24rem;
`;

export const ModalClose = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.5rem;
    height: 1.5rem;

    font-weight: 700;
    font-size: 1.5rem;

    border-radius: 50%;

    background-color: ${COLOR.PRIMARY};
    color: ${COLOR.WHITE};
    z-index: 250;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            background-color: ${COLOR.BLACK};
        }
    }
`;
