import axios from "axios";
import Cookies from "js-cookie";

// axios config for server
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// const token = async () => {
//   const token = await Cookies.get("token");
//   if (token) {
//     return token;
//   } else {
//     setTimeout(() => {
//       const newToken = Cookies.get("token");
//       return newToken;
//     }, 500); // Adjust the delay as needed
//   }
// };

const http = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

// Interceptor to stringify request data
http.interceptors.request.use(function (config) {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.data) {
    config.data = JSON.stringify(config.data);
  }

  return config; // Make sure to return the modified config object
});

export default http;
