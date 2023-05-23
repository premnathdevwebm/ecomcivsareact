import axios from "axios";
import { getToken } from "./helpers";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_DEV_URL + url);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_DEV_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const makeRequestAuth =  axios.create({
  baseURL: process.env.REACT_APP_DEV_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getToken()}`
  },
});
