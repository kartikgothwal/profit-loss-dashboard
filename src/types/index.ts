export interface Column {
  value: string;
}

export interface Row {
  Header: any;
  type: string;
  group?: string;
  ColData?: Column[];
  Rows?: { Row?: Row[] };
  Summary?: { ColData?: Column[] };
}

export interface ProfitLossData {
  Columns?: {
    Column: {
      ColTitle: ReactNode; value: string 
}[];
  };
  Rows?: { Row?: Row[] };
}
