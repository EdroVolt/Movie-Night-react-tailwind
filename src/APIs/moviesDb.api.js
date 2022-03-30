import axios from "axios";
export const Movie = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "6dc6bc8a803c0f86bdd40e6d6841eae4",
    limit: 18,
  },
});
