import { memo } from "react";
import { NavLink, Link } from "./styles";
import UserLinks from "./UserLinks";
import { isActive } from "./service";


function NavLinkList() {
    return (
        <>
            <NavLink>
                <Link to="home" style={isActive}>
                    Inicio
                </Link>
            </NavLink>
            <NavLink>
                <Link to="favs" style={isActive}>
                    Favoritos
                </Link>
            </NavLink>
            <UserLinks isActive={isActive} />
        </>
    );
}
export default memo(NavLinkList);
