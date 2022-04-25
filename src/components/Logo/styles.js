import styled from "@emotion/styled";
import { Link as LinkRouter } from "react-router-dom";

export const LogoContainer = styled.div`
    ${({ margin }) => margin && `margin: ${margin};`}
    width: ${({ maxWidth }) => maxWidth || "10rem"};
    aspect-ratio: 1092 / 350.08;
    transition: transform ease 0.3s;

    &:hover {
        transform: scale(110%);
    }
`;

export const Imagen = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const Link = styled(LinkRouter)``;
