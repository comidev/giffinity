import { ENDPOINT } from "data";

export const addSearch = (search, token) => {
    return fetch(`${ENDPOINT}/search`, {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(search),
    }).then((res) => {
        if (!res.ok) throw Error("addSearch is NOT ok!");
    });
};

export const lastSearch = (user) => {
    const lastPos = user?.searchs?.length || -1;
    const ultimaBusqueda =
        lastPos === -1 ? "random" : user.searchs[lastPos - 1].search;
    return ultimaBusqueda;
};
