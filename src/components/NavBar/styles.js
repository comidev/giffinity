import styled from "@emotion/styled";
import { CONTAINER, COLOR } from "styles";
import { NavLink as LinkRouter } from "react-router-dom";

export const NavContainer = styled.header`
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100vw;
    height: 5rem;
    background: ${COLOR.BLACK_2};
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Nav = styled.nav`
    ${CONTAINER}
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media screen and (max-width: 700px) {
        justify-content: center;
    }
`;

export const NavLinksContainer = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 700px) {
        position: fixed;
        top: 5.5rem;
        right: ${({ right }) => right};
        z-index: -1;

        flex-direction: column;

        background-color: ${COLOR.BLACK_2};
        border-radius: 1rem;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

        width: max-content;
        height: max-content;
        padding: 0.7rem 0.5rem 0.1rem;

        transition: right ease 0.3s;
    }
`;
export const NavLink = styled.li`
    margin-left: 1rem;

    @media screen and (max-width: 700px) {
        height: 3rem;
        margin: 0.1rem 0 0.1rem;
    }
`;

export const Link = styled(LinkRouter)`
    color: ${COLOR.PRIMARY};
    padding: 0.4rem 0.4rem;
    font-size: 16px;
    font-weight: 600;
    transition: border-color ease-in-out 0.3s;

    @media (hover: hover) {
        &:hover {
            color: ${COLOR.WHITE};
        }
    }
`;

export const Username = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
`;

export const Connect = styled.div`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-left: 0.4rem;
    border-radius: 50%;
    background-color: ${COLOR.SUCCESS};
`;

// MENU ------------------------------
export const MenuBotton = styled.div`
    display: none;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 100;

    width: 3rem;
    height: 3rem;
    font-size: 2.7rem;

    border-radius: 50%;
    color: ${COLOR.PRIMARY};
    background-color: ${COLOR.WHITE};

    @media screen and (max-width: 700px) {
        display: flex;
    }

    @media screen and (max-width: 320px) {
        right: 0.2rem;
    }
`;
