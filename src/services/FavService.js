import { ENDPOINT } from "data";

export const addFav = (fav, token) => {
    return fetch(`${ENDPOINT}/fav/add`, {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(fav),
    }).then((res) => {
        if (!res.ok) throw new Error("add fav is NOT ok");
    });
};

export const deleteFav = (fav) => {
    return fetch(`${ENDPOINT}/fav/delete`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(fav),
    }).then((res) => {
        if (!res.ok) throw new Error("delete fav is NOT ok");
    });
};
