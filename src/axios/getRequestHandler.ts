import axios from "axios";
const HOST: string = import.meta.env.VITE_BACKEND_URI;
export function getRequestHandler(endpoint: string) {
  return axios.get(`${HOST}/${endpoint}`);
}
