import { Giffis } from "./styles";
import useGifs from "hooks/useGifs";
import Gif from "components/Gif";
import Spinner from "components/Spinner";

export default function Gifs() {
    const { giffis, loadingGifs, loadingPageGifs } = useGifs();
    return (
        <>
            <Giffis>
                
                {giffis.map(({ title, id, url }, index) => (
                    <Gif
                        title={title}
                        url={url}
                        id={id}
                        key={`${title}${id}${index}`}
                    />
                ))}
            </Giffis>
            {loadingPageGifs ? <></> : loadingGifs && <Spinner />}
        </>
    );
}
