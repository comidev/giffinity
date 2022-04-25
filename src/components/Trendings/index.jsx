import { H4 } from "styles";
import { Tendencias } from "./styles";
import TrendList from "./TrendList";

export default function Trendings() {
    return (
        <Tendencias>
            <H4 align="start" white="verdadero">
                Tendencias
            </H4>
            <TrendList />
        </Tendencias>
    );
}
