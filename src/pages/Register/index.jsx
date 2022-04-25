import { COLOR, H4 } from "styles";
import { LoginContainer, LoginError, LoginInput, LoginLabel } from "./styles";
import { Button } from "components/Button";
import useRegister from "hooks/useRegister";
import { useCallback } from "react";

export default function Register() {
    const { errorUsername, errorPassword, crearCuenta } = useRegister();

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const username = e.target[0].value;
            const password = e.target[1].value;
            crearCuenta({ username, password });
        },
        [crearCuenta]
    );

    return (
        <LoginContainer onSubmit={handleSubmit}>
            <H4>Crear cuenta nueva</H4>
            <LoginLabel>
                <LoginInput
                    error={errorUsername ? "true" : ""}
                    placeholder="Escriba su username"
                />
                {errorUsername && <LoginError>{errorUsername}</LoginError>}
            </LoginLabel>

            <LoginLabel>
                <LoginInput
                    autoComplete="true"
                    type="password"
                    error={errorPassword ? "true" : ""}
                    placeholder="Escriba su password"
                />
                {errorPassword && <LoginError>{errorPassword}</LoginError>}
            </LoginLabel>
            <Button margin="auto" type="submit" bg={COLOR.BLACK} white="verdadero">
                Crear cuenta
            </Button>
        </LoginContainer>
    );
}
