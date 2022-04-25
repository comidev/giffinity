import styled from "@emotion/styled";

export const Loading = styled.div`
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
`;

export const Giffis = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: 0.2rem;

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    }
`;
