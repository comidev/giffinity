import { createContext, useCallback, useState } from "react";
import { getFavs } from "services/UsersService";

const Context = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [favs, setFavs] = useState(null);
    const [loadingFavs, setLoading] = useState(false);

    const cerrarSesion = () => {
        setUser(null);
        setFavs(null);
    };

    const updateFavs = useCallback(() => {
        if (Boolean(user)) {
            setLoading(true);
            getFavs(user.jwt)
                .then((favs) => {
                    favs.reverse();
                    setFavs(favs);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [user]);

    return (
        <Context.Provider
            value={{
                user,
                favs,
                loadingFavs,
                setUser,
                updateFavs,
                cerrarSesion,
                setFavs,
            }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
