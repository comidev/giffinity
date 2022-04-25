import { FavIcon, FavContainer } from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { COLOR } from "styles";
import { useEffect, useState } from "react";
import useUser from "hooks/useUser";
import Modal from "components/Modal";
import Login from "components/Login";
import { addFav, deleteFav } from "services/FavService";

export default function Fav({ title, id, url }) {
    const { user, favs } = useUser();
    const [isFav, setIsFav] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onClose = () => setShowModal(false);

    useEffect(
        function () {
            if (Boolean(user) && Boolean(favs)) {
                const hadFav = favs.some(
                    (fav) => fav.gifId === `${title}${id}${user.username}`
                );
                if (hadFav) {
                    setIsFav(true);
                }
            }
        },
        [title, id, favs, user]
    );

    const handleClick = () => {
        if (Boolean(user)) {
            if (!isFav) {
                addFav(
                    {
                        title,
                        gifId: `${title}${id}${user.username}`,
                        url,
                    },
                    user.jwt
                );
            } else {
                deleteFav({
                    gifId: `${title}${id}${user.username}`,
                });
            }
            setIsFav(!isFav);
        } else {
            setShowModal(true);
        }
    };

    return (
        <>
            {showModal && (
                <Modal onClose={onClose}>
                    <Login />
                </Modal>
            )}
    
            <FavContainer
                color={isFav ? COLOR.RED : COLOR.WHITE}
                onClick={handleClick}>
                <FavIcon>{isFav ? <AiFillHeart /> : <AiOutlineHeart />}</FavIcon>
            </FavContainer>
        </>
    );
}
