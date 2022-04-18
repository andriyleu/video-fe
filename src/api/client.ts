import axios from "axios";

export const API_ENDPOINT = "https://andriyleu-video-api.herokuapp.com/api";

export default axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-type": "application/json",
  },
});
