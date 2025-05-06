import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});


export default api;
