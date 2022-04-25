import styled from "@emotion/styled";

export const GifContainer = styled.div`
    position: relative;
    width: max-content;
    max-width: 100%;
    min-width: 13rem;
    min-height: 8rem;
    height: min-content;

    @media screen and (max-width: 700px) {
        min-width: 8rem;
    }
`;

export const GifTitle = styled.p`
    background-color: rgba(0, 0, 0, 0.3);

    position: absolute;
    z-index: 40;
    left: 0rem;

    width: 100%;
    margin: 0;
    padding-left: 0.2rem;

    font-size: 12px;
`;

export const ImgContainer = styled.div`
    position: relative;
`;

export const Img = styled.img`
    max-width: 100%;
    object-fit: cover;
`;
