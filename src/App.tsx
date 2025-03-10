import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { ProfitLossData, Row } from "./types";

function App() {
  const [profitLossData, setProfitLossData] = useState<ProfitLossData | null>(
    null
  );

  useEffect(() => {
    async function fetchReportData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/quickbooks/profit-and-loss"
        );
        setProfitLossData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchReportData();
  }, []);
  // const incomeRow = (profitLossData?.Columns?.Column?.length ?? 0) - 1;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Profit & Loss Report
      </h1>

      {profitLossData ? (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {profitLossData.Columns?.Column?.map((col, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-right"
                >
                  {col.ColTitle}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* <tr className={`border border-gray-300`}> */}
            {/* <td
                className="border border-gray-300 px-4 py-2"
                style={{ paddingLeft: `${1 * 20}px` }}
              >
                Income
              </td> */}
            {/* {Array(incomeRow)
                .fill(0)
                .map((_) => (
                  <td
                    key={10}
                    className="border border-gray-300 px-4 py-2 text-right"
                  ></td>
                ))} */}
            {/* </tr> */}
            {profitLossData.Rows?.Row?.map((row, rowIndex) => (
              <RowComponent key={rowIndex} row={row} level={0} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">Loading data...</p>
      )}
    </div>
  );
}

const RowComponent = ({ row, level }: { row: Row; level: number }) => {
  return (
    <>
      {row?.Header && (
        <tr
          className={`border border-gray-300 ${level === 0 ? "font-bold" : ""}`}
        >
          <td
            className="border border-gray-300 px-4 py-2"
            style={{ paddingLeft: `${1 * 20}px` }}
          >
            {row?.Header?.ColData[0]?.value || ""}
          </td>
          {row?.Header?.ColData.slice(1).map(
            (col: { value: string }, index: number) => (
              <td
                key={index}
                className="border border-gray-300 px-4 py-2 text-right"
              >
                {col.value || ""}
              </td>
            )
          )}
        </tr>
      )}
      {row.ColData && (
        <tr
          className={`border border-gray-300 ${level === 0 ? "font-bold" : ""}`}
        >
          <td
            className="border border-gray-300 px-4 py-2"
            style={{ paddingLeft: `${2 * 20}px` }}
          >
            {row.ColData[0]?.value || ""}
          </td>
          {row.ColData.slice(1).map((col, index) => (
            <td
              key={index}
              className="border border-gray-300 px-4 py-2 text-right"
            >
              {col.value || ""}
            </td>
          ))}
        </tr>
      )}
      {/* Render nested rows if present */}
      {row.Rows?.Row?.map((nestedRow, index) => (
        <RowComponent key={index} row={nestedRow} level={level + 1} />
      ))}
      {/* Render summary row if available */}
      {row.Summary?.ColData && (
        <tr className="border border-gray-300 font-bold bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">
            {row.Summary.ColData[0]?.value || ""}
          </td>
          {row.Summary.ColData.slice(1).map((col, index) => (
            <td
              key={index}
              className="border border-gray-300 px-4 py-2 text-right"
            >
              {col.value || ""}
            </td>
          ))}
        </tr>
      )}
    </>
  );
};

export default App;
