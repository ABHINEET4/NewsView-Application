import axios from 'axios';

const API_KEY = 'ca6aaf0d3e4445109c7cdf4d93797e0f'; // Replace 'YOUR_API_KEY' with your actual API key
const API_URL = 'https://newsapi.org/v2';

export const fetchSources = async () => {
    const requestSource = 'sources';
    try {
        const { data: { sources } } = await axios.get(`${API_URL}/${requestSource}?apiKey=${API_KEY}`);

        return sources.map((source) => source);
    } catch (error) {
        throw error;
    }
};

export const fetchNews = async (request) => {
    try {
        if (!API_KEY) {
            throw new Error('API key is missing.');
        }
        const { data: { articles } } = await axios.get(`${API_URL}/${request.category}?${request.query}&pageSize=${request.results}&apiKey=${API_KEY}`);

        return articles.map((article) => article);
    } catch (error) {
        throw error;
    }
};
