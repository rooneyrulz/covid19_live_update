import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const globalAPI = axios.create({
  baseURL: process.env.REACT_APP_GLOBAL_COVID_URI,
  headers,
});

export const localAPI = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_COVID_URI,
  headers,
});
