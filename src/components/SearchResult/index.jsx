import { SearchBody, SearchResult as SearchResultContainer } from "./styles";
import Gifs from "components/Gifs";
import SearchTitle from "./SearchTitle";
import Visor from "./Visor";
import useUser from "hooks/useUser";
import useGifs from "hooks/useGifs";
import Spinner from "components/Spinner";

export default function SearchResult() {
    const { loadingFavs } = useUser();
    const { loadingPageGifs } = useGifs();

    return (
        <SearchResultContainer>
            {loadingFavs || loadingPageGifs ? (
                <Spinner />
            ) : (
                <>
                    <SearchTitle />
                    <SearchBody>
                        <Gifs />
                    </SearchBody>
                    <Visor />
                </>
            )}
        </SearchResultContainer>
    );
}
