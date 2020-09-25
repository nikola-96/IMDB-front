import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default HTTP;
