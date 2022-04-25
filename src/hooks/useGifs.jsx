import GifsContext from "context/GifsProvider";
import { useContext } from "react";

export default function useGifs() {
    const { keyword, setKeyword, loadingPageGifs, giffis, loadingGifs, nextPage } =
        useContext(GifsContext);
    return { keyword, setKeyword, loadingPageGifs, giffis, loadingGifs, nextPage };
}
