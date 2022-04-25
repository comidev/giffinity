import { SEARCH } from "data";

export const getGifs = ({ keyword, page }) => {
    return fetch(SEARCH({ keyword, page, lang: "en" }), {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((res) => {
            const { data = [] } = res;
            const gifs = data.map((image) => {
                const { images, title, id } = image;
                const { url } = images.downsized_medium;
                return { title, id, url };
            });

            return gifs;
        });
};
