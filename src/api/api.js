import Axios from "axios";

export const http = Axios.create({
    baseURL: 'http://localhost:3000'
})

export const getLatestQuotes = async (assets) => {
    const { data } = http.get(``);

    return data;
}

export const getHistoricalQuotes = async (assets, timestamp) => {
    const { data } = http.get(``);

    return data;
}
