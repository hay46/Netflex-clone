import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
//098cf7df8664831da2f95bec0d2f91ed