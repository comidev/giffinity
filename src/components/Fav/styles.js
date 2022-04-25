import styled from "@emotion/styled";

export const FavContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: transparent;

    transition: color ease 0.3s;
    @media (hover: hover) {
        &:hover {
            color: ${({ color }) => color};
            cursor: pointer;
            backdrop-filter: blur(2px);
        }
    }
`;

export const FavIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 4rem;
    height: 4rem;
    margin: auto;
    font-size: 4rem;
`;
