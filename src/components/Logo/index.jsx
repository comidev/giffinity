import { LogoContainer, Imagen, Link } from "./styles";

import logo from "images/logo.png";
import { memo } from "react";

function Logo({ maxWidth, margin }) {
    return (
        <LogoContainer maxWidth={maxWidth} margin={margin}>
            <Link to="/home">
                <Imagen src={logo} />
            </Link>
        </LogoContainer>
    );
}

export default memo(Logo);
