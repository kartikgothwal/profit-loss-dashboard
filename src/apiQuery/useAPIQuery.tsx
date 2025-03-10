import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getRequestHandler } from "../axios/getRequestHandler";
import { getURL } from "../utils/getURL";
import { IAPIResponse } from "../types";

export const useGetQueries:(queryKeyEndpoint:string)=>UseQueryResult = (queryKeyEndpoint: string): UseQueryResult<IAPIResponse> => {
  return useQuery({
    queryKey: [queryKeyEndpoint],
    queryFn: () => getRequestHandler(getURL(queryKeyEndpoint)),
  });
};
