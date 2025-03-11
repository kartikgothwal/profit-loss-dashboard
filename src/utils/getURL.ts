import { GET_BALANCE_SHEET_DATA, GET_PROFIT_LOSS_REPORT } from "../constant";

export const getURL: (endpoint: string) => string = (
  endpoint: string
): string => {
  switch (endpoint) {
    case GET_PROFIT_LOSS_REPORT:
      return "quickbooks/profit-and-loss";
    case GET_BALANCE_SHEET_DATA:
      return "quickbooks/balance-sheet";

    default:
      return "";
  }
};
