import styled from "@emotion/styled";
import { COLOR } from "styles";
import { Link as LinkRouter } from "react-router-dom";

export const Button = styled.button`
    display: inline-block;
    max-width: max-content;
    ${({ margin }) => margin && `margin: ${margin};`}
    padding: ${({ padding }) => padding || "0.8rem 1rem"};
    border-radius: ${({ radius }) => radius || "0.4rem"};

    font-size: 14px;
    font-weight: 600;

    background-color: ${({ bg }) => bg || COLOR.WHITE};
    color: ${({ white }) => (white ? COLOR.WHITE : COLOR.BLACK)};
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            background-color: ${COLOR.GOLD};
            color: ${COLOR.WHITE};
            box-shadow: 0 5px 10px rgba(255, 255, 255, 0.2);
        }
    }
`;

export const ButtonL = Button.withComponent(LinkRouter);
export const ButtonA = Button.withComponent("a");
