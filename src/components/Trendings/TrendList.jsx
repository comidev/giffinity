import { useCallback } from "react";
import { TendenciaList } from "./styles";
import useTrendings from "hooks/useTrendings";
import Trend from "./Trend";
import { addSearch } from "services/SearchService.js";
import useGifs from "hooks/useGifs";
import useUser from "hooks/useUser";
import Spinner from "components/Spinner";

export default function TrendList() {
    const { trendings, loading } = useTrendings();
    const { setKeyword } = useGifs();
    const { user, updateFavs } = useUser();

    const handleClick = useCallback(
        (e) => {
            const newKeyword = e.target.innerText;
            if (user) addSearch({ lastSearch: newKeyword }, user.jwt);
            updateFavs();
            setKeyword(newKeyword);
        },
        [user, setKeyword, updateFavs]
    );

    return (
        <TendenciaList>
            {loading ? (
                <Spinner />
            ) : (
                trendings.map((trending, index) => (
                    <Trend
                        key={trending}
                        trending={trending}
                        index={index}
                        onClick={handleClick}
                    />
                ))
            )}
        </TendenciaList>
    );
}
