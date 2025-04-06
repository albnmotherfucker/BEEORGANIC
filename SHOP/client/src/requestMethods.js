import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZjA0NDI0MzBjYjQxODYzYWE3ZjQ2OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0Mzg2MTc5NiwiZXhwIjoxNzQ0MTIwOTk2fQ.tjvgprDBgQYGREXFc91Pq3-kzMjDXIP7p5blooXv92I";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

