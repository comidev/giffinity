import { createContext } from "react";
import { INITIAL_PAGE } from "data";
import { useCallback, useEffect, useState } from "react";
import { getGifs } from "services/GifsService.js";

const Context = createContext();

export function GifsProvider({ children }) {
    const [loadingGifs, setLoading] = useState(false);
    const [loadingPageGifs, setLoadingPageGifs] = useState(false);
    const [keyword, setKeyword] = useState("random");
    const [_, setPage] = useState(INITIAL_PAGE);
    const [giffis, setGiffis] = useState([]);

    useEffect(
        function () {
            setLoadingPageGifs(true);
            setLoading(true);
            getGifs({ keyword }).then((nextGifs) => {
                setGiffis(nextGifs);
                setLoadingPageGifs(false);
                setLoading(false);
            });
        },
        [keyword]
    );

    const nextPage = useCallback(() => {
        setLoading(true);
        setPage((prev) => {
            const newPage = prev + 1;
            getGifs({ keyword, page: newPage }).then((nextGifs) => {
                setGiffis((prevGifs) => prevGifs.concat(nextGifs));
                setLoading(false);
            });
            return newPage;
        });
    }, [keyword]);

    return (
        <Context.Provider
            value={{
                keyword,
                loadingPageGifs,
                setKeyword,
                giffis,
                loadingGifs,
                nextPage,
            }}>
            {children}
        </Context.Provider>
    );
}
export default Context;
