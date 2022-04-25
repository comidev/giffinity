import Logo from "components/Logo";
import { NavContainer, Nav } from "./styles";
import NavMenu from "./NavMenu";

export default function NavBar() {
    return (
        <NavContainer>
            <Nav>
                <Logo />
                <NavMenu />
            </Nav>
        </NavContainer>
    );
}
