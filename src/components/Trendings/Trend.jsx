import { memo } from "react";
import { COLOR } from "styles";
import { TendenciaItem, ButtonTrend } from "./styles";

function Trend({ trending, index, onClick }) {
    return (
        <TendenciaItem>
            <ButtonTrend
                bg={COLOR.RANDOMS[index % COLOR.RANDOMS.length]}
                onClick={onClick}>
                {trending}
            </ButtonTrend>
        </TendenciaItem>
    );
}

export default memo(Trend);
