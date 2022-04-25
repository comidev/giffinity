// import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { ModalClose, ModalContainer, ModalContent } from "./styles";

export default function Modal({ children, onClose }) {
    return (
        <ModalContainer>
            <ModalContent>
                <ModalClose onClick={onClose}>
                    <MdClose />
                </ModalClose>
                {children}
            </ModalContent>
        </ModalContainer>
    );
}

// function ModalPortal({ children, onClose }) {
//     return createPortal(
//         <Modal onClose={onClose}>{children}</Modal>,
//         document.getElementById("modal-login")
//     );
// }
