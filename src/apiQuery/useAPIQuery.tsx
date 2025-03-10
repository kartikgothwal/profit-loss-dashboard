import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getRequestHandler } from "../axios/getRequestHandler";
import { getURL } from "../utils/getURL";
import { IAPIResponse } from "../types";
import { AxiosResponse } from "axios";

export const useGetQueries: (
  queryKeyEndpoint: string
) => UseQueryResult<IAPIResponse, Error> = (
  queryKeyEndpoint: string
): UseQueryResult<IAPIResponse, Error> => {
  return useQuery({
    queryKey: [queryKeyEndpoint],
    queryFn: async (): Promise<AxiosResponse<IAPIResponse, Error>> => {
      const response: AxiosResponse<IAPIResponse, Error> =
        await getRequestHandler(getURL(queryKeyEndpoint));
      return response;
    },
  });
};
