import { ENDPOINT } from "data";

export const login = (user) => {
    return fetch(`${ENDPOINT}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Login is NOT ok");
            }
            return res.json();
        })
        .then((res) => {
            const { token } = res;
            return token;
        });
};

export const register = (user) => {
    return fetch(`${ENDPOINT}/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then((res) => {
        if (!res.ok) throw new Error("Register is NOT ok");
    });
};

export const getLastSearch = (token) => {
    return fetch(`${ENDPOINT}/user/lastSearch`, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (!res.ok) throw new Error("GetLastSearch is NOT ok");
            return res.json();
        })
        .then((res) => {
            const { lastSearch } = res;
            return lastSearch;
        });
};

export const getFavs = (token) => {
    return fetch(`${ENDPOINT}/user/favs`, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (!res.ok) throw new Error("getFavs is NOT ok");
            return res.json();
        })
        .then((res) => {
            const { favs } = res;
            return favs;
        });
};
