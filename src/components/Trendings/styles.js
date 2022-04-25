import styled from "@emotion/styled";
import { COLOR } from "styles";

export const Tendencias = styled.section`
    margin-top: 2rem;
`;

export const TendenciaList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;
export const TendenciaItem = styled.li`
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
`;

export const ButtonTrend = styled.button`
    background-color: ${({ bg }) => bg};
    color: ${COLOR.WHITE};
    border: 0;
    outline: 0;
    font-size: 15px;
    font-weight: 600;
    padding: 0.1rem 0.2rem;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            background-color: ${COLOR.WHITE};
            color: ${COLOR.BLACK};
        }
    }

`;
