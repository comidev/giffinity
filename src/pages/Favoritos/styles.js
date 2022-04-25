import styled from "@emotion/styled";
import { COLOR, CONTAINER } from "styles";

export const FavoritosContainer = styled.section`
    color: ${COLOR.WHITE};
    ${CONTAINER}
`;

export const Favs = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: 0.2rem;
`;

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const ButtonLogin = styled.div`
    width: max-content;
    margin: auto;
`;
