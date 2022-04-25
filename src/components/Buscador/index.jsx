import {
    BuscardorBody,
    BuscadorInput,
    BuscadorIcon,
    BuscadorContainer,
} from "./styled";
import { FiSearch } from "react-icons/fi";
import { Button } from "components/Button";
import { memo } from "react";

function Buscador({ onSubmit }) {
    return (
        <BuscadorContainer>
            <BuscardorBody role="searchbox" onSubmit={onSubmit}>
                <BuscadorIcon>
                    <FiSearch />
                </BuscadorIcon>
                <BuscadorInput type="search" placeholder="Buscar..." />
                <Button type="submit" radius="0">
                    Buscar
                </Button>
            </BuscardorBody>
        </BuscadorContainer>
    );
}

export default memo(Buscador);
