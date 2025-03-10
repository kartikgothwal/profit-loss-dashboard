import { ReactNode } from "react";

export interface Column {
  value: string;
}

export interface Row {
  Header: {
    ColData?: Column[];
  };
  type: string;
  group?: string;
  ColData?: Column[];
  Rows?: { Row?: Row[] };
  Summary?: { ColData?: Column[] };
}

export interface ProfitLossData {
  Columns?: {
    Column: {
      ColTitle: ReactNode;
      value: string;
    }[];
  };
  Rows?: { Row?: Row[] };
}

export interface ErrorExpertProps {
  error: unknown;
}
export interface IAPIResponse {
  data: ProfitLossData | undefined;
  status: number;
  statusText: string;
}
export interface ErrorComponentProps {
  message?: string;
  onRetry?: () => void;
}
