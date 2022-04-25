import { useState } from "react";
import useUser from "hooks/useUser";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "services/UsersService";

export default function useLogin() {
    const { setUser } = useUser();
    const [errorUsername, setErrorUsername] = useState("");
    const navigate = useNavigate();

    const registrarse = () => navigate("/register");

    const login = (userLogin) => {
        loginService(userLogin)
            .then((token) => {
                const userLoged = { username: userLogin.username, jwt: token };
                setUser(userLoged);
                setErrorUsername("");
                navigate("/home");
            })
            .catch(() => {
                setErrorUsername("Username y/o password incorrecto");
            });
    };

    return { registrarse, login, errorUsername };
}
