import { GET_PROFIT_LOSS_REPORT } from "../constant";

export const getURL = (endpoint: string): string => {
  switch (endpoint) {
    case GET_PROFIT_LOSS_REPORT:
      return "quickbooks/profit-and-loss";
    default:
      return "";
  }
};
