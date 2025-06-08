const axios = require("axios");

const api = axios.create({
    baseURL: 'http://www.omdbapi.com',
    params: {
        apikey: '1e2214b9', // OMDb API key
    },
    headers: {
        'Content-Type': 'Application/json',
    }
});

module.exports = api;
