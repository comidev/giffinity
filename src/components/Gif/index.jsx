import { GifContainer, Img, ImgContainer, GifTitle } from "./styles";
import Fav from "components/Fav";
import { memo, useRef } from "react";

function Gif({ url, title, id }) {
    const imgRef = useRef(null);
    return (
        <GifContainer>
            <GifTitle>{title}</GifTitle>
            <ImgContainer>
                <Img ref={imgRef} src={url} alt={title.toString()} />
                {id && <Fav title={title} url={url} id={id} />}
            </ImgContainer>
        </GifContainer>
    );
}

export default memo(Gif);
