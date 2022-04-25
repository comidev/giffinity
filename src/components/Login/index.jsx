import { Button } from "components/Button";
import useLogin from "hooks/useLogin";
import { COLOR, H4 } from "styles";
import { LoginContainer, LoginError, LoginInput, LoginLabel } from "./styles";

export default function Login() {
    const { registrarse, login, errorUsername } = useLogin();
    const handleClick = () => registrarse();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        login({ username, password });
    };

    return (
        <LoginContainer onSubmit={handleSubmit}>
            <H4>Iniciar Sesión</H4>
            <LoginLabel>
                <LoginInput
                    error={errorUsername ? "true" : ""}
                    placeholder="Escriba su username"
                />
                {errorUsername && <LoginError>{errorUsername}</LoginError>}
            </LoginLabel>
            <LoginInput
                autoComplete="true"
                type="password"
                placeholder="Escriba su password"
            />
            <Button margin="auto" type="submit" bg={COLOR.BLACK} white="verdadero">
                Iniciar Sesión
            </Button>
            <Button
                type="button"
                onClick={handleClick}
                margin="1rem auto 0"
                bg={COLOR.PRIMARY}
                white="verdadero">
                Crear cuenta nueva
            </Button>
        </LoginContainer>
    );
}
