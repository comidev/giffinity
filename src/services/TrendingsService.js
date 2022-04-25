import { TRENDINGS } from "data";

export const getTrendings = () => {
    return fetch(TRENDINGS, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((res) => {
            const { data = [] } = res;
            return data;
        });
};
