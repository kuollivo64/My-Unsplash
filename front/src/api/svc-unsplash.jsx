import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL;

export const svc_unsplash = axios.create({ baseURL: apiUrl })