import axios from "axios";

const API_KEY = `AIzaSyAQfXwCM4FuLB_LLjPN2jWZsdVhAegD-E0`;
const BACKEND_URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:9781451648546&key=${API_KEY}`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: false,
  });

  return api;
};
