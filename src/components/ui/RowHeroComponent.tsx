import RowComponent from "./RowComponent";
import { ProfitLossData, Row } from "../../types";
import { JSX, useEffect, useState } from "react";
import { useGetQueries } from "../../apiQuery/useAPIQuery";
import { GET_PROFIT_LOSS_REPORT } from "../../constant";

const RowHeroComponent: () => JSX.Element = (): JSX.Element => {
  const [profitLossData, setProfitLossData] = useState<ProfitLossData | null>(
    null
  );
  const { data, error, isPending } = useGetQueries(GET_PROFIT_LOSS_REPORT);
  console.log("🚀 ~ data:", data);
  useEffect(() => {
    setProfitLossData(data?.data);
  }, [data]);
  return (
    <>
      {profitLossData ? (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {profitLossData.Columns?.Column?.map(
                (
                  col: {
                    ColTitle: React.ReactNode;
                    value: string;
                  },
                  index: number
                ) => (
                  <th
                    key={index}
                    className="border border-gray-300 px-4 py-2 text-right"
                  >
                    {col.ColTitle}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {profitLossData.Rows?.Row?.map((row: Row, rowIndex: number) => (
              <RowComponent key={rowIndex} row={row} level={0} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">Loading data...</p>
      )}
    </>
  );
};

export default RowHeroComponent;
