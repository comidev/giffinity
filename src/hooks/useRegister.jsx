import { useCallback, useState } from "react";
import useUser from "hooks/useUser";
import { useNavigate } from "react-router-dom";
import { register, login } from "services/UsersService";

export default function useRegister() {
    const { setUser } = useUser();
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const navigate = useNavigate();

    const crearCuenta = useCallback(
        ({ username, password }) => {
            // validación ----------------------------
            const usernameValid = username.length >= 6;
            const passwordValid = password.length >= 3;
            // ---------------------------------------
            if (usernameValid && passwordValid) {
                setErrorPassword("");
                const userNew = { username, password };
                // Registramos
                register(userNew)
                    .then(() => {
                        // Logeamos
                        login(userNew).then((token) => {
                            setUser({ username: userNew.username, jwt: token });
                            navigate("/home");
                        });
                    })
                    .catch(() => {
                        setErrorUsername("Username existente");
                    });
            } else {
                // formato inválido
                if (!usernameValid) {
                    setErrorUsername("Mínimo 6 caracteres");
                } else {
                    setErrorUsername("");
                }
                if (!passwordValid) {
                    setErrorPassword("Mínimo 3 caracteres");
                } else {
                    setErrorPassword("");
                }
            }
        },
        [navigate, setUser]
    );

    return { errorUsername, errorPassword, crearCuenta };
}
