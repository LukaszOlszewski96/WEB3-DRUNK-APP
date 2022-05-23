import axios from "axios";
import { apiConfig } from "./api.config";

const axiosConfig = axios.create({
  baseURL: apiConfig(),
});

export { axiosConfig as http };
