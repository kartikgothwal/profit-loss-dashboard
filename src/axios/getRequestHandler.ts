import axios, { AxiosResponse } from "axios";
import { IAPIResponse } from "../types";
const HOST: string = import.meta.env.VITE_BACKEND_URI;
export function getRequestHandler(
  endpoint: string
): Promise<AxiosResponse<IAPIResponse, Error>> {
  return axios.get(`${HOST}/${endpoint}`);
}
