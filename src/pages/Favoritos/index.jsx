import { useEffect, useState } from "react";
import Gif from "components/Gif";
import useUser from "hooks/useUser";
import { H1, P } from "styles";
import { FavoritosContainer, Favs } from "./styles";
import NoUser from "./NoUser";
import { getFavs } from "services/UsersService";
import Spinner from "components/Spinner";

export default function Favoritos() {
    const { user, favs, setFavs } = useUser();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (Boolean(user)) {
            setLoading(true);
            getFavs(user.jwt).then((favs) => {
                favs.reverse();
                setFavs(favs);
                setLoading(false);
            });
        }
    }, [user, setFavs]);

    return (
        <FavoritosContainer>
            {user ? (
                <>
                    <H1 white="verdadero">Tus favoritos ❤</H1>
                    {favs && favs.length > 0 ? (
                        loading ? (
                            <Spinner />
                        ) : (
                            <Favs>
                                {favs.map(({ gifId, title, url }) => (
                                    <Gif key={gifId} title={title} url={url} />
                                ))}
                            </Favs>
                        )
                    ) : (
                        <P white="verdadero" size="1.5rem">
                            Aún no tiene favoritos, ¡anímese y dele fav! :)
                        </P>
                    )}
                </>
            ) : (
                <NoUser />
            )}
        </FavoritosContainer>
    );
}
