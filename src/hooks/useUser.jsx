import { useContext } from "react";
import UserContext from "context/UserProvider";

export default function useUser() {
    const { user, favs, loadingFavs, setUser, updateFavs, cerrarSesion, setFavs } =
        useContext(UserContext);
    return { user, favs, loadingFavs, setUser, updateFavs, cerrarSesion, setFavs };
}
