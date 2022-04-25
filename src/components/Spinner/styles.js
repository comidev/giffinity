import styled from "@emotion/styled";
import { BREAK_POINTS } from "styles";

export const Circle = styled.div`
    width: 20%;
    aspect-ratio: 1;
    max-width: 8rem;
    margin: 2.5rem auto;
    border-radius: 50%;
    border: 7px solid #48e;
    border-left-color: transparent;
    animation: spinner 1s linear infinite;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        border-width: 5px;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
