import {
    Button as ButtonStyle,
    ButtonL as ButtonLStyle,
    ButtonA as ButtonAStyle,
} from "./styles.js";

export function Button({
    onClick,
    children,
    type,
    radius,
    padding,
    bg,
    white,
    margin,
}) {
    return (
        <ButtonStyle
            bg={bg}
            onClick={onClick}
            type={type}
            radius={radius}
            padding={padding}
            white={white}
            margin={margin}>
            {children}
        </ButtonStyle>
    );
}
export function ButtonA({ href, children }) {
    return <ButtonAStyle href={href}>{children}</ButtonAStyle>;
}
export function ButtonL({
    to,
    children,
    radius,
    padding,
    bg,
    white,
    margin,
}) {
    return (
        <ButtonLStyle
            to={to}
            bg={bg}
            radius={radius}
            padding={padding}
            white={white}
            margin={margin}>
            {children}
        </ButtonLStyle>
    );
}
