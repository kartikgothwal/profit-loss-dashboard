import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Column {
  value: string;
}

interface Row {
  type: string;
  group?: string;
  ColData?: Column[];
  Rows?: { Row?: Row[] };
  Summary?: { ColData?: Column[] };
}

interface ProfitLossData {
  Columns?: {
    column: { value: string }[];
  };
  Rows?: { Row?: Row[] };
}

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
        console.log("🚀 ~ fetchReportData ~ response:", response.data);
        setProfitLossData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchReportData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Profit & Loss Report
      </h1>

      {profitLossData ? (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Category
              </th>
              {profitLossData.Columns?.column?.map((col, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-right"
                >
                  {col.value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
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

// Recursive Row Renderer to handle nested categories
const RowComponent = ({ row, level }: { row: Row; level: number }) => {
  return (
    <>
      {row.ColData && (
        <tr
          className={`border border-gray-300 ${level === 0 ? "font-bold" : ""}`}
        >
          <td
            className="border border-gray-300 px-4 py-2"
            style={{ paddingLeft: `${level * 20}px` }} // Indentation for subcategories
          >
            {row.ColData[0]?.value || "-"}
          </td>
          {row.ColData.slice(1).map((col, index) => (
            <td
              key={index}
              className="border border-gray-300 px-4 py-2 text-right"
            >
              {col.value || "-"}
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
            {row.Summary.ColData[0]?.value || "-"}
          </td>
          {row.Summary.ColData.slice(1).map((col, index) => (
            <td
              key={index}
              className="border border-gray-300 px-4 py-2 text-right"
            >
              {col.value || "-"}
            </td>
          ))}
        </tr>
      )}
    </>
  );
};

export default App;
