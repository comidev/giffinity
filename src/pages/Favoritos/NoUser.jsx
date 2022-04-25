import { ButtonL } from "components/Button";
import { H1 } from "styles";
import { ButtonLogin } from "./styles";

export default function NoUser() {
    return (
        <>
            <H1 white="verdadero">Debe iniciar sesión :'(</H1>
            <ButtonLogin>
                <ButtonL to="/login">Iniciar sesión</ButtonL>
            </ButtonLogin>
        </>
    );
}
