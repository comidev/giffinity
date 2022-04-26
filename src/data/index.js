const API_KEY = "nNju7JAyyNxJ4Mav2LHIkZ2ZNz8CGVML";
const API_URL = "https://api.giphy.com/v1";

export const INITIAL_PAGE = 0;

export const SEARCH = ({ keyword, limit = 25, lang = "es", page = INITIAL_PAGE }) =>
    `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
        limit * page
    }&rating=g&lang=${lang}`;

export const TRENDINGS = `${API_URL}/trending/searches?api_key=${API_KEY}`;

export const ENDPOINT = "https://giffinity.herokuapp.com/";
