import axios from "axios";

// axios config for server
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const token = localStorage.getItem("token") || "";
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwODUyOGM2LTgyNmUtNDQyOS1iZjVhLTgxYTkxYmFkNGU3OCIsImlhdCI6MTY5NzMxMjQyNCwiZXhwIjoxNjk3Mzk4ODI0fQ.eDfBfOpY0YC5M09Vs1vIwLsvLfbpmjtEazFZxyII5CQ"

const http = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
});

export default http;
