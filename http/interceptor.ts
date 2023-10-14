import axios from "axios";

// axios config for server
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const http = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1MDM3YWQ3LWVkMmEtNDRmYS05MzNiLWViOWZmYjM2NWM1YSIsImlhdCI6MTY5NzI5NjgyMywiZXhwIjoxNjk3MzgzMjIzfQ.WkrPI6s0fj_ZXmLZBOAfZxt_z5BrOaQLce1VQJqvY7M`,
  },
});

export default http;
