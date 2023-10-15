import axios from "axios";

// axios config for server
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const http = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

// Interceptor to stringify request data
http.interceptors.request.use(function (config) {
  if (config.data) {
    config.data = JSON.stringify(config.data);
  }
  return config;
});

export default http;
