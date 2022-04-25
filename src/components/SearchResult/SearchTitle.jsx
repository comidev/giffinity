import { H2 } from "styles";
import useGifs from "hooks/useGifs";

export default function SearchTitle() {
    const { keyword } = useGifs();
    return (
        <H2 align="start" white="verdadero">
            {keyword}
        </H2>
    );
}
