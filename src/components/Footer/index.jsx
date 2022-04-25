import Logo from "components/Logo";
import { FooterBody, FooterContainer, FooterFooter, FooterMain } from "./styles";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterBody>
                <FooterMain>
                    <Logo maxWidth="9rem" />
                </FooterMain>
                <FooterFooter>
                    &copy; Página diseñada y construida por Omar Miranda
                </FooterFooter>
            </FooterBody>
        </FooterContainer>
    );
}
