import { Button, ButtonL } from "components/Button";
import useUser from "hooks/useUser";
import { COLOR } from "styles";
import { NavLink, Username, Connect } from "./styles";
import { isActive } from "./service";
import { useNavigate } from "react-router-dom";

export default function UserLinks() {
    const { user, cerrarSesion } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        cerrarSesion();
        navigate("/home");
    };

    return Boolean(user) ? (
        <>
            <NavLink>
                <Username>
                    {user.username}
                    <Connect />
                </Username>
            </NavLink>
            <NavLink>
                <Button onClick={handleLogout}>Cerrar Sesión</Button>
            </NavLink>
        </>
    ) : (
        <>
            <NavLink>
                <ButtonL
                    bg={COLOR.PRIMARY}
                    white="verdadero"
                    to="login"
                    style={isActive}>
                    Iniciar Sesión
                </ButtonL>
            </NavLink>
            <NavLink>
                <ButtonL to="register" style={isActive}>
                    Registrarse
                </ButtonL>
            </NavLink>
        </>
    );
}
