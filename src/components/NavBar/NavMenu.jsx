import { NavLinksContainer, MenuBotton } from "./styles";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";
import NavLinkList from "./NavLinkList";

export default function NavMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const handleToggleMenu = () => setShowMenu(!showMenu);

    return (
        <>
            <NavLinksContainer right={showMenu ? "0.5rem" : "-10rem"}>
                <NavLinkList />
            </NavLinksContainer>
            <MenuBotton onClick={handleToggleMenu}>
                {showMenu ? <MdClose /> : <MdMenu />}
            </MenuBotton>
        </>
    );
}
