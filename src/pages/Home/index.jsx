import { useCallback, useEffect } from "react";
import { HomeContainer } from "./styles";

import Buscador from "components/Buscador";
import Trendings from "components/Trendings";
import SearchResult from "components/SearchResult";

import useGifs from "hooks/useGifs";
import useUser from "hooks/useUser";

import { addSearch } from "services/SearchService.js";
import { getLastSearch } from "services/UsersService";

export default function Home() {
    const { setKeyword } = useGifs();
    const { user, updateFavs } = useUser();

    useEffect(() => {
        if (Boolean(user)) {
            updateFavs();
            getLastSearch(user.jwt)
                .then((lastSearch) => {
                    setKeyword(lastSearch);
                })
                .catch(() => {
                    setKeyword("random");
                });
        } else {
            setKeyword("random");
        }
    }, [user, setKeyword, updateFavs]);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const newKeyword = e.target[0].value;
            if (newKeyword) {
                if (user) addSearch({ lastSearch: newKeyword }, user.jwt);
                updateFavs();
                setKeyword(newKeyword);
            }
        },
        [user, setKeyword, updateFavs]
    );

    return (
        <HomeContainer>
            <Buscador onSubmit={handleSubmit} />
            <Trendings />
            <SearchResult />
        </HomeContainer>
    );
}
